/*global BOM:true */
(function (global) {
  'use strict';

  BOM = BOM || {};
  BOM.Data = BOM.Data || {};

  BOM.Data.Storage = function (storageType, namespace) {

    // storageType can either be a storage object or a string
    if(typeof storageType === 'object') {
      this._storage = storageType;
    } else {
      if (!this.SUPPORTED_STORAGE_RE.test(storageType)) {
        throw 'Unsupported storage type';
      }
      var storageObjectName = storageType + 'Storage';

      if (typeof global[storageObjectName] === 'undefined') {
        throw storageObjectName + ' unavailable in this context';
      }

      this._storage = global[storageObjectName];
    }

    if (typeof BOM !== 'undefined' && typeof BOM.User !== 'undefined' && typeof BOM.User.userid !== 'undefined' && BOM.User.userid !== null) {
      namespace = BOM.User.userid + '_' + namespace;
    }
    this.namespace = namespace || 'bom';
  };

  BOM.Data.Storage.prototype = {
    SUPPORTED_STORAGE_RE: /^local|session$/,

    _getNamespacedKey: function (key) { // TODO cleanup : this function doesn't seem to be called anywhere ?! moreover its name starts with underscore (private?)
      return [this.namespace, '_', key].join('');
    },
    _getNamespaceObject: function () {
      try {
        return JSON.parse(this._storage.getItem(this.namespace));
      } catch (e) {
        return null;
      }
    },
    _setNamespaceObject: function (obj) {
      this._storage.setItem(this.namespace, JSON.stringify(obj));
    },
    get: function (key) {
      var obj = this._getNamespaceObject();
      if (!obj || !obj.hasOwnProperty(key)) {
        return null;
      }
      return obj[key];
    },
    set: function (key, value) {
      var obj = this._getNamespaceObject() || {};

      obj[key] = value;
      this._setNamespaceObject(obj);
      return value;
    },
    remove: function (key) {
      var obj = this._getNamespaceObject();
      if (null === obj) {
        return null;
      }
      var res   = obj[key];

      delete obj[key];
      this._setNamespaceObject(obj);

      return res;
    },
    clear: function () {
      try {
        this._storage.removeItem(this.namespace);
      } catch (e) {}
    }
  };
}(this));