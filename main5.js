/*global $*/
$(document).ready(function(){
  
  let timer
  let pointsTimer = 0
  let secondsTimer = 0
  let tenSecondsTimer = 0
  let minutesTimer = 0
  
  $(".reset").click(function(){
    clearInterval(timer);
    $(".number").html(0);
    pointsTimer = 0
    secondsTimer = 0
    tenSecondsTimer = 0
    minutesTimer = 0
    $(".reset").prop("disabled",true);
    $(".stop").prop("disabled",true);
    $(".start").prop("disabled",false);
  });
  
  $(".start").click(function() {
    $(".start").prop("disabled",true);
    $(".stop").prop("disabled",false);
    $(".reset").prop("disabled",false);
    timer = setInterval(function(){
      pointsTimer ++;
      $(".points_place").html(pointsTimer);
      if(pointsTimer == 100){
        secondsTimer ++;
        $(".seconds_place").html(secondsTimer);
        pointsTimer = 0;
      };
      if(secondsTimer == 59 && pointsTimer == 99){
        tenSecondsTimer ++;
        $(".ten_seconds_place").html(tenSecondsTimer);
        secondsTimer = -1;
      };
      if(tenSecondsTimer == 59 && secondsTimer == 59 && pointsTimer == 98){
        minutesTimer ++;
        $(".minutes_place").html(minutesTimer);
        tenSecondsTimer = -1;
      };  
    },10);
    });
  
  $(".stop").click(function() {
    $(".start").prop("disabled",false);
    $(".stop").prop("disabled",true);
    clearInterval(timer);
  });
  
});