function bubbleSort(array){
  if (array.length === 0 || array.length === 1){
    return array;
  }
  else {
    var count = 1;
    while (count <= array.length + 1){
      for (var i = 0; i < array.length - count; i++){
        if (array[i] > array[i+1]){
          var sArray = [array[i], array[i + 1]];
          let temp = swap(sArray);
          array[i] = temp[0];
          array[i + 1] = temp[1];
        }

      }
      count++;
    }
  }
  return array;
}

function swap(smallArray){return [smallArray[1], smallArray[0]];}

