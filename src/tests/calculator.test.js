const assert = require('assert');

describe('Calculator', function() {
  it('should add numbers correctly', function() {
    assert.strictEqual(2 + 3, 5);
    assert.strictEqual(-1 + 1, 0);
  });

  it('should subtract numbers correctly', function() {
    assert.strictEqual(5 - 3, 2);
    assert.strictEqual(0 - 7, -7);
  });

  it('should multiply numbers correctly', function() {
    assert.strictEqual(4 * 3, 12);
    assert.strictEqual(-2 * 3, -6);
  });

  it('should divide numbers correctly', function() {
    assert.strictEqual(10 / 2, 5);
    assert.strictEqual(9 / 3, 3);
  });

  it('should calculate modulo correctly', function() {
    assert.strictEqual(10 % 3, 1);
    assert.strictEqual(8 % 2, 0);
  });

  it('should calculate power correctly', function() {
    assert.strictEqual(Math.pow(2, 3), 8);
    assert.strictEqual(Math.pow(5, 0), 1);
  });

  it('should calculate square root correctly', function() {
    assert.strictEqual(Math.sqrt(9), 3);
    assert.strictEqual(Math.sqrt(0), 0);
  });

  it('should throw error for sqrt of negative number', function() {
    assert.ok(Number.isNaN(Math.sqrt(-1)));
  });
});
