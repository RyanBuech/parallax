$(function(){
    var target1 = $("#parallax-01");
    var targetPosOT1 = target1.offset().top;
    var target2 = $("#parallax-02");
    var targetPosOT2 = target2.offset().top;
    /*var target3 = $("#parallax-03");
    var targetPosOT3 = target3.offset().top;*/
    var targetR = $("#parallax-r");
    var targetPosOTR = targetR.offset().top;
    var targetFactor = 0.5;
    var rTargetFactor = 0.52;
    var windowH = $(window).height();
    var scrollYStart1 = targetPosOT1 - windowH;
    var scrollYStart2 = targetPosOT2 - windowH;
    /*var scrollYStart3 = targetPosOT3 - windowH;*/
    var scrollYStartR = targetPosOTR - windowH;

   /* $(window).on('load',function(){
      var scrollY = $(this).scrollTop();
      target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
      target2.css('background-position-y', (scrollY - targetPosOT2) * targetFactor + 'px');
      target3.css('background-position-y', (scrollY - targetPosOT3) * targetFactor + 'px');
      targetR.css('background-position-y', (scrollY - targetPosOTR) * rTargetFactor + 'px');
    }); */

    $(window).on('scroll',function(){
      var scrollY = $(this).scrollTop();

      target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
      target2.css('background-position-y', (scrollY - targetPosOT2) * targetFactor + 'px');
      targetR.css('background-position-y', (scrollY - targetPosOTR) * rTargetFactor + 'px');

      /*
      if(scrollY > scrollYStart1){
        target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
      }else{
        target1.css('background-position','center top');
      }
      if(scrollY > scrollYStart2){
        target2.css('background-position-y', (scrollY - targetPosOT2) * targetFactor + 'px');
      }else{
        target2.css('background-position','center top');
      }
      if(scrollY > scrollYStart3){
        target3.css('background-position-y', (scrollY - targetPosOT3) * targetFactor + 'px');
      }else{
        target3.css('background-position','center top');
      }
      if(scrollY > scrollYStartR){
        targetR.css('background-position-y', (scrollY - targetPosOTR) * rTargetFactor + 'px');
      }else{
        targetR.css('background-position','center top');
      }
      */
    });
  });