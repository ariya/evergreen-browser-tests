if (typeof require === 'function') {
    var assert = require("chai").assert;
}

describe("sqrt", function() {

  it("should not compute the square root of -1", function() {
    assert.isNaN(Math.sqrt(-1));
  });

  it("should compute the square root of 1 as 1", function() {
    assert.equal(Math.sqrt(1), 1);
  });

  it("should compute the square root of 4 as 2", function() {
    assert.equal(Math.sqrt(4), 2);
  });

  it("should compute the square root of 9 as 3", function() {
    assert.equal(Math.sqrt(9), 3);
  });

});
