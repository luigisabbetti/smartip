// Plugin: jQuery.smartip
// Author: Luigi Sabbetti
    
$.fn.smartip = function(x = 10, y = 10, xDirection, yDirection) {
  var $this = $(this);
  var tooltipText = $this.data("tip");
  var xOffset = 0;
  var yOffset = 0;
  var smartip = "p.smartip";
   
  $this.hover(function() {
     $(this).append("<p class='smartip'> " + tooltipText + "</p>");
  }, function() {
    $(this).empty("p");
  }).mousemove(function(e) {
    var xPosition = e.pageX + x;
    var yPosition = e.pageY + y;
     
    if($(smartip).length) {
       xOffset = $(smartip).outerWidth();
       yOffset = $(smartip).outerHeight();
    }
     
    xDirection == "left" ? xPosition = xPosition - xOffset - 25 : xPosition = xPosition;
    yDirection == "top" ? yPosition = yPosition - yOffset - 25 : yPosition = yPosition;
     
    $(smartip).css({
         top:yPosition,
         left:xPosition,
       });
  });
   
  return $this;
};