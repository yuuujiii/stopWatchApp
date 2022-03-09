/*global $*/
$(document).ready(function(){
  
  $(".reset").click(function(){
    let resetTime = 0;
    $(".number").html(resetTime);
    clearInterval(pointsTimer);
    $(".reset").prop("disabled",true);
    $(".stop").prop("disabled",true);
    $(".start").prop("disabled",false);
  });
  
  
  let pointsTimer = 0
  let secondsTimer = 1
  let tenSecondsTimer = 1
  let minutesTimer = 1
  
  
  $(".start").click(function() {
    
    $(".start").prop("disabled",true);
    $(".stop").prop("disabled",false);
    $(".reset").prop("disabled",false);
    
    pointsTimer = setInterval(function(){
      $(".points_place").html(pointsTimer);
      pointsTimer ++;
      if(pointsTimer / 10 == 1){
        $(".seconds_place").html(secondsTimer);
        secondsTimer ++;
        pointsTimer = 0;
      };  
      if(secondsTimer / 10 == 1){
        secondsTimer = 0;
        $(".ten_seconds_place").html(tenSecondsTimer);
        tenSecondsTimer ++;
      };  
      if(tenSecondsTimer / 6 == 1){
        $(".minutes_place").html(minutesTimer);
        tenSecondsTimer = 0;
        minutesTimer ++;
      };  
    },100);


    });
  
$(".stop").click(function() {
  $(".start").prop("disabled",false);
  $(".stop").prop("disabled",true);
  clearInterval(pointsTimer);
});
  

  
  
  
  
  
  
  
});