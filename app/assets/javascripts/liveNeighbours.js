function getLiveNeighbours(allElements, i){
  var liveNeighbours = 0;
    if (allElements[i-51]!= undefined && allElements[i-51].className.indexOf("live") > -1){liveNeighbours++}
    if (allElements[i-50]!= undefined && allElements[i-50].className.indexOf("live") > -1){liveNeighbours++}
    if (allElements[i-49]!= undefined && allElements[i-49].className.indexOf("live") > -1){liveNeighbours++}
    if (allElements[i-1]!= undefined && allElements[i-1].className.indexOf("live") > -1){liveNeighbours++}
    if (allElements[i+1]!= undefined && allElements[i+1].className.indexOf("live") > -1){liveNeighbours++}
    if (allElements[i+51]!= undefined && allElements[i+51].className.indexOf("live") > -1){liveNeighbours++}
    if (allElements[i+50]!= undefined && allElements[i+50].className.indexOf("live") > -1){liveNeighbours++}
    if (allElements[i+49]!= undefined && allElements[i+49].className.indexOf("live") > -1){liveNeighbours++}

     return liveNeighbours;
}


