// startGenerations function will create generations of the selected cells in a grid.
// Any live cell with two or three live neighbours lives on to the next generation - this is acheived by cell class property and is not a part of any code change.

function startGenerations() {

  // fetching values of all cells and assigning it to allElements
 var cellWillDie = [];
 var cellWillLive = [];
 var allElements = document.querySelectorAll(".cell");

  // iterating through all cells to find find next generation live cells
  for (var i=0, max=allElements.length; i < max; i++) {
    var liveNeighbours = getLiveNeighbours(allElements, i);

    //Any live cell with fewer than two live neighbours dies,Any live cell with more than three live neighbours dies.

    if ((liveNeighbours<2 || liveNeighbours>3) && allElements[i].className.indexOf("live") > -1){
      cellWillDie.push(allElements[i].id)
    }

    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

    if (liveNeighbours === 3 && allElements[i].className.indexOf("dead") > -1){
      cellWillLive.push(allElements[i].id)
    }
  }

  cellWillDie.forEach(function(cellID) {
    document.getElementById(cellID).className = 'dead cell';
  });
  cellWillLive.forEach(function(cellID) {
    document.getElementById(cellID).className = 'live cell';
  });

  if (cellWillDie.length > 0 || cellWillLive.length > 0){
    setTimeout(startGenerations, 500);

  }
}


