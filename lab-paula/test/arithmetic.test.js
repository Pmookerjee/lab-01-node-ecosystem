const arithmetic = require('../lib/arithmetic.js');
let expect = require('expect');

describe('Add module should handle all input types correctly', function(){

  it('should return the correct sum when two numbers are given', function(){

    let response = arithmetic.add(10, 3);
    expect(response).toEqual(13);

  });

  it('should return null when non number inputs are given', function(){

    let response = arithmetic.add('barf', 12);
    expect(response).toEqual(null);

  });

});

describe('Subtract module should handle all input types correctly', function(){

  it('should return the correct difference when two numbers are given', function(){

    let response = arithmetic.subtract(3, 8);
    expect(response).toEqual(5);

  });

  it('should return null when non number inputs are given', function(){

    let response = arithmetic.subtract('Joe Mama', ' was here');
    expect(response).toEqual(null);

  });

});
