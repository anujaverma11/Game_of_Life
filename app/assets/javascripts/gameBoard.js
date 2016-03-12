
$(document).ready(function () {
  var x = 50;
  var y=50;
  for (var i=0; i < x; i++){
    var row=$('<tr>', {id:"X"+i } ).appendTo('table');
    for(var j=0;j<y;j++){
      $('<td>',{id:"X"+i+"_"+j, class:"inactive"}).appendTo(row)
    }
  }

  $("td").on("click", function() {
    $(this).toggleClass("inactive active");
  });

});

