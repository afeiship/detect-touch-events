(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  //supports:
  var pointerEnabledSupport = nx.get(global, 'navigator.pointerEnabled');
  var msPointerEnabledSupport = nx.get(global, 'navigator.msPointerEnabled');
  var touchSupport = 'ontouchstart' in global;
  var EVENTS_POINTER = ['pointerdown', 'pointermove', 'pointerup'];
  var EVENTS_MS_POINTER = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
  var EVENTS_TOUCH = ['touchstart', 'touchmove', 'touchend'];
  var EVENTS_MOUSE = ['mousedown', 'mousemove', 'mouseup'];

  var NxTouchEvents = nx.declare('nx.TouchEvents', {
    statics: {
      eventsList: [],
      init: function() {
        var eventsList = this.eventsList;
        switch (true) {
          case pointerEnabledSupport:
            eventsList = EVENTS_POINTER;
            break;
          case msPointerEnabledSupport:
            eventsList = EVENTS_MS_POINTER;
            break;
          case touchSupport:
            eventsList = EVENTS_TOUCH;
            break;
          default:
            eventsList = EVENTS_MOUSE;
        }

        nx.mix(this, {
          // will be removed:
          TOUCH_START: eventsList[0],
          TOUCH_MOVE: eventsList[1],
          TOUCH_END: eventsList[2],

          // new:
          START: eventsList[0],
          MOVE: eventsList[1],
          END: eventsList[2]
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxTouchEvents;
  }
})();
