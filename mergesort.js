function split (wholeArray) {
  let midP = Math.floor(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, midP);
  let secondHalf = wholeArray.slice(midP);
  return [firstHalf, secondHalf]
}

function merge (arrayOne, arrayTwo) {
  var endArr = [];
  while (arrayOne.length && arrayTwo.length){
    if (arrayOne[0] < arrayTwo[0]) {
     endArr.push(arrayOne.shift());
    } else {
     endArr.push(arrayTwo.shift());
   }
  }
  if (arrayOne.length) {
    endArr = endArr.concat(arrayOne);
  }
  else {
    endArr = endArr.concat(arrayTwo);
  }
  return endArr;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  else {
    let splitArrays = split(array);
    return merge(mergeSort(splitArrays[0]), mergeSort(splitArrays[1]))
  }
}
