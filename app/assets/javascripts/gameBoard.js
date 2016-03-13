$(document).ready(function () {

  // create a 50X50 grid
  var x = 50;
  var y=50;
  for (var i=0; i < x; i++){
    var row=$('<tr>', {id:"X"+i } ).appendTo('table');
    for(var j=0;j<y;j++){
      $('<td>',{id:"X"+i+"_"+j, class:"dead cell"}).appendTo(row)
    }
  }

  // change td class to activate a TD
  $("td").on("click", function() {
    $(this).toggleClass("dead live");
  });

  // call startGenerations function on button click
  $('.start').click(startGenerations);

  // Toggle button on button click
  $('#stop').on("click", function() {
    $(this).toggleClass("trueStop falseStop");
  });


});


