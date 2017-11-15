(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  //supports:
  var pointerEnabledSupport = global.navigator.pointerEnabled;
  var msPointerEnabledSupport = global.navigator.msPointerEnabled;
  var touchSupport = 'ontouchstart' in global;

  var NxTouchEvents = nx.declare('nx.TouchEvents',{
    statics:{
      eventsList:[],
      init:function(){
        var eventsList = this.eventsList;
        switch(true){
          case pointerEnabledSupport:
            eventsList = ['pointerdown','pointermove','pointerup'];
            break;
          case msPointerEnabledSupport:
            eventsList = ['MSPointerDown','MSPointerMove','MSPointerUp'];
            break;
          case touchSupport:
            eventsList = ['touchstart','touchmove','touchend']
            break;
          default:
           eventsList =['mousedown','mousemove','mouseup'];
        }

        nx.mix(this,{
          TOUCH_START:eventsList[0],
          TOUCH_MOVE:eventsList[1],
          TOUCH_END:eventsList[2]
        });
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxTouchEvents;
  }

}());
