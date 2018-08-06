
try {
  mps=mps||{};
  mps._queue=mps._queue||{};
  mps._queue.abdetect=mps._queue.abdetect||[]; 
  mps._ga={
    'init':function(property,nopv) {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','mpsga');
      mpsga('create',property,'auto');
      mps._debug('[mps:GA] INITIALIZED '+property);
      var pagevars = mps.pagevars;
      mps._ga.custom.mps_instance=pagevars.instance;
      mps._ga.custom.mps_path=pagevars.path;
      mps._ga.custom.mps_type=pagevars.type;
      mps._ga.custom.mps_topsect=pagevars.cats&&pagevars.cats[0]?pagevars.cats[0]:null;
      mps._ga.custom.mps_sect=pagevars.hierarchy;
      mps._ga.custom.mps_cags=(typeof pagevars.dart_cags==='object')?mps._ga.cags(pagevars.dart_cags):null;
      var gaNum=1;
      for(var i in mps._ga.custom) { mps._ga.set('dimension' + gaNum,mps._ga.custom[i]);gaNum++}
      if(!nopv) {
        mpsga('send','pageview');
        mps._debug('[mps:GA] PAGEVIEW');
      }
    },
    'set':function(key,val) {
      mps._debug('[mps:GA] SET('+key+','+val+')');
      if(val) {mpsga('set', key, val);}
    },
    'event':function(category,action,label,options) {
      if(typeof(mpsga)!='function') {
        mps._debug('[mps:GA] EVENT FAILED');
        return false;
      }
      mps._debug('[mps:GA] EVENT('+category+','+action+','+label+','+options+')');
      return mpsga('send','event',category,action,label,options);
    },
    'cags':function(val) {
      var cagStr='';
      for(var i in val) {
        var cagVal = '';
        for(var j in val[i]) {
          cagVal+=i + '::' + val[i][j] + ',';
        }
        if(cagVal.length > 0) {cagVal=cagVal.substring(0, cagVal.length - 1);}
        cagStr+=(cagVal + '|');
      }
      if(cagStr.length > 0) {cagStr=cagStr.substring(0, cagStr.length - 1);}
      return cagStr;
    },
    'custom':{}
  }

var adBlockEnabled = true;
var mps = mps || {};
mps._queue = mps._queue || {};
mps._queue.abdetect = mps._queue.abdetect || [];
mps._ab = mps._ab || {};
mps._ab.timer = 0;
mps._ab.run = false;
mps._ab.type = null;
mps._delays=mps._delays||{};
mps._ab.delays = mps._delays.abdetect || 8000;
mps._ab.detectiontime = mps._ab.detectiontime || null;
mps._ab.render = function (name) {
  mps._ab.run = true;
  mps._ab.detectiontime = mps._elapsed(false, true);
  if(typeof mps._queue.render === 'function') {
    mps._queue.render('abdetect', name);
  }
  if(typeof(mps.abdetectCallback)=='function') {
    try {
      mps.abdetectCallback(name);
    } catch(err) {
      mps._errorCallback(err, 'mps.abdetectCallback');
    }
  }
  if(!name) {
    mps._debug('[mps:AB] NOT ENABLED')
  } else {
    mps._debug('[mps:AB] DETECTED (' +name+ ')');
  }
};
mps._ab.detect = function () {
  if(mps._ab.run) {
    return false;
  }
  mps._ab.timer = mps._ab.timer + 500;
  // Script blocked.
  if (adBlockEnabled === true) {
    mps._ab.type = 'filename';
    mps._ab.render('filename');
    // Domain blocked.
  } else if ((mps._gptError && mps._gptError === true) || mps._ab.timer === mps._ab.delays) {
    if(mps._gptError) {
      mps._ab.type = 'domain';
      mps._ab.render('domain');
    } else {
      mps._ab.type = 'timeout';
      mps._ab.render('timeout');
    }
    // MPS not loaded.
  } else if (mps._gptError === undefined && mps._ab.timer < mps._ab.delays) {
    setTimeout(function (){
      mps._ab.detect();
    }, 500);
    mps._debug('[mps:AB] waiting... (try ' + mps._ab.timer / 500 + ' of 16)');
    return false;
    // No detection, append container div.
  } else {
    if(!document.getElementById('adbanner')) {
      if(document.getElementsByTagName('body')[0]) {
        var _abcont = document.createElement('div');
        _abcont.id = 'adbanner';
        _abcont.style = 'width:0;height:0;';
        document.getElementsByTagName('body')[0].appendChild(_abcont);
        setTimeout(function (){
          mps._ab.detect();
        }, 100);
      } else {
        setTimeout(function (){
          mps._ab.detect();
        }, 500);
      }
    } else {
      var _abconttest = document.getElementById('adbanner');
      if(_abconttest && _abconttest.offsetParent === null) {
        mps._ab.type = 'container';
        mps._ab.render('container');
      } else {
        mps._ab.type = false;
        mps._ab.render(false);
      }
    }
  }
};
mps._ab._script = document.createElement('script');
mps._ab._script.src = '//www.nbcudigitaladops.com/hosted/pubads.js';
mps._ab._script.type = 'text/javascript';
mps._ab._script.onload = function () {
  var _abtimeout = setTimeout(function (){
    mps._ab.detect();
  }, 500);
};
mps._ab._script.onerror = function () {
  var _abtimeout = setTimeout(function (){
    mps._ab.detect();
  }, 500);
};
document.getElementsByTagName('head')[0].appendChild(mps._ab._script);
mps._debug('[MPS:AB]: component version loaded.');

} catch(err) { if(typeof mps === 'object' && typeof mps._errorCallback === 'function'){ mps._errorCallback(err, 'Component SID:adblock-detect-ga');}}
