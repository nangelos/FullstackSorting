beforeEach(function(){
  spyOn(window,'swap').and.callThrough();
})

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array of one', function(){
    expect( bubbleSort([3]) ).toEqual( [3] );
  });
  it('handles an array with multiple elements', function(){
    expect( bubbleSort([5,3,4,23,53,13,25]) ).toEqual( [3,4,5,13,23,25,53] );
  });
  it('it calls swap three times', function(){
    bubbleSort([5,4,3]);
    expect(window.swap.calls.count()).toEqual(3);
  });
  it('it calls swap three times', function(){
    bubbleSort([9,7,4,6]);
    expect(window.swap.calls.count()).toEqual(5);
  });
});


