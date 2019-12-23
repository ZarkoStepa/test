console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      var wordToDisplay = "JavaScript"
    };
    let isMatchOne = Structured.match(code, structureOne);
   
    assert.isOk(isMatchOne, 'Did you set the variable wordToDisplay equal to "JavaScript"? Capitalization matters!');
  });
});