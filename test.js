console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      bubbleShape = 'square'
    };
    let isMatchOne = Structured.match(code, structureOne);
   
    assert.isOk(isMatchOne, 'Did you set bubbleShape equal to "square"? Capitalization matters!');
  });
});