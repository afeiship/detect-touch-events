(function () {

  var global = global || this;
  var nx = global.nx || require('next-js-core2');

  //supports:
  var pointerEnabledSupport = global.navigator.pointerEnabled;
  var msPointerEnabledSupport = global.navigator.msPointerEnabled;
  var touchSupport = 'ontouchstart' in global;

  nx.decalre('nx.TouchEvents',{
    statics:{
      init:function(){
        var eventsList = [];
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
          touchStartEvent:eventsList[0],
          touchMoveEvent:eventsList[1],
          touchEndEvent:eventsList[2]
        });
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.DetectTouchEvents;
  }

}());
