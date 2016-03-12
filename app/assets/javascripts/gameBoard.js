
$(document).ready(function () {

  // create a 50X50 grid
  var x = 50;
  var y=50;
  for (var i=0; i < x; i++){
    var row=$('<tr>', {id:"X"+i } ).appendTo('table');
    for(var j=0;j<y;j++){
      $('<td>',{id:"X"+i+"_"+j, class:"inactive cell"}).appendTo(row)
    }
  }

  // change td class to activate a TD
  $("td").on("click", function() {
    $(this).toggleClass("inactive active");
  });

  // call startGenerations function on button click
  $('.start').click(startGenerations);

  // var allElements = document.querySelectorAll(".cell");




});


