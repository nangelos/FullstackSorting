describe('Split Array function', function() {
  it('is able to split an even array into two halves', function() {
   expect( split([4,5,7,3])).toEqual([[4,5],[7,3]]);
  });
   it('is able to split an odd array into two halves', function() {
    expect( split([4,5,7,3,9])).toEqual([[4,5],[7,3,9]]);
  });

});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect( merge([2,4,8],[3,7,9])).toEqual([2,3,4,7,8,9]);
  });
  it('is able to merge two sorted, unequal length arrays into one sorted array', function(){
    // test the merging algorithm
    expect( merge([2,4,8,10],[3,7,9])).toEqual([2,3,4,7,8,9,10]);
  });

});

describe('Merge Sort function', function(){
  it('is able to sort an array', function(){
    // test the merging algorithm
    expect( mergeSort([9,20,8,3,7,2])).toEqual([2,3,7,8,9,20]);
  });
  it('is able to sort an array', function(){
    // test the merging algorithm
    expect( mergeSort([20,9,8,7,3,2])).toEqual([2,3,7,8,9,20]);
  });
});

