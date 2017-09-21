'use strict';


let arithmetic = module.exports = {};

arithmetic.add = function(a, b) {
  if((typeof a === 'number') && (typeof b === 'number')){
    return a + b;
  } else {
    return null;
  }
};

arithmetic.subtract = function(a, b) {
  if((typeof a === 'number') && (typeof b === 'number')){
    return b - a;
  } else {
    return null;
  }
};
