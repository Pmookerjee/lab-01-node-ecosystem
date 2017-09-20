const greet = require('../lib/greet.js');
let expect = require('expect');

describe('Greet module should function correctly', function(){

  it('should return null when non-string inputs are given', function(){

    let response = greet(875);
    expect(response).toEqual(null);

  });

  it('should return "Hello World" when "World" is the input given', function(){

    let response = greet('World');
    expect(response).toEqual('Hello World');

  });

});
