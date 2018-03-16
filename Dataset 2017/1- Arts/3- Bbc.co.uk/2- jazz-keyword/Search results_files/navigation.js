define(['../ie8/ie8-utils', '../core/events'], function (ie8Utils, events) {

  'use strict';

  var carouselBtnHolder,
    prevBtn,
    nextBtn,
    initialised = false,
    prevBtnAction = function () {
     //noop
    },
    nextBtnAction = function () {
      //noop
    };

  var carouselBtnHolderId = 'carousel-btn-holder';

  function discoverElements () {
    carouselBtnHolder = document.getElementById(carouselBtnHolderId);
    if (carouselBtnHolder) {
      prevBtn = carouselBtnHolder.firstElementChild;
      nextBtn = prevBtn.nextElementSibling;
    }

    initialised = true;
  }

  function registerEventHandlers () {
    events.addEvent('click',
      function() {
        prevBtnAction()
      },
      prevBtn);

    events.addEvent('click',
      function() {
        nextBtnAction()
      },
      nextBtn);
  }

  function checkIfInitialised () {
    if (!initialised) {
      throw Error('Instance not initialised');
    }
  }

  function setBtnPosition (xPos) {
    checkIfInitialised();

    if (xPos) {
      carouselBtnHolder.style.right = xPos + 'px';
    }
    else {
      if (!ie8Utils.isIE8) {
        carouselBtnHolder.style.removeProperty('right');
      }
      else {
        carouselBtnHolder.style.removeAttribute('right');
      }
    }
  }

  function disablePrevBtn () {
    checkIfInitialised();
    prevBtn.disabled = true;
  }

  function enablePrevBtn () {
    checkIfInitialised();
    prevBtn.disabled = false;
  }

  function disableNextBtn () {
    checkIfInitialised();
    nextBtn.disabled = true;
  }

  function enableNextBtn () {
    checkIfInitialised();
    nextBtn.disabled = false;
  }

  function setPrevBtnAction (action) {
    checkIfInitialised();
    prevBtnAction = action;
  }

  function setNextBtnAction (action) {
    checkIfInitialised();
    nextBtnAction = action;
  }

  function init () {
    discoverElements();
    registerEventHandlers();
  }

  // public interface
  return {
    init: init,
    setBtnPosition: setBtnPosition,
    disablePrevBtn: disablePrevBtn,
    enablePrevBtn: enablePrevBtn,
    disableNextBtn: disableNextBtn,
    enableNextBtn: enableNextBtn,
    setPrevBtnAction: setPrevBtnAction,
    setNextBtnAction: setNextBtnAction
  };
});