/**
 * Event Util for cross browsers environment
 */

let EventUtil = {

  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      // DOM level 2
      element.addEventListener(type, handler, false); // bubble
    } else if (element.attachEvent) {
      // IE
      element.attachEvent("on" + type, handler);
    } else {
      // DOM level 0
      element[ "on" + type ] = handler;
    }
  },

  removeHandler: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element[ "on" + type ] = null;
    }
  },

  getEvent: function (event) {
    return event ? event : window.event;
  },

  getTarget: function (event) {
    return event.target || event.srcElement;
  },

  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },

  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  }
};

export default EventUtil;