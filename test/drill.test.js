'use strict'; 

const expect = require('chai').expect; 
const sort = require('../drill.js');

describe('Drill function', () => {
  it ('should sort the array in ascending order', () => {
    expect(sort([2, 5, 1, 3, 4])).to.deep.equal([1, 2, 3, 4, 5]); 
  });
  it ('should sort the array in ascending order', () => {
    expect(sort([5, 2])).to.eql([2, 5]); 
  });
  it ('should return an array', () => {
    expect(sort([2, 5, 1, 3, 4])).to.be.an('array');
  });
  it ('should return an array of the correct length', () => {
    expect(sort([2, 5, 1, 3, 4]).length).to.equal(5); 
  });
  it ('should throw error if input is not an array', () => {
    const fn = () => {sort('string');};
    expect(fn).to.throw(); 
  });
}); 