const assert = require('assert');
const { execSync } = require('child_process');

function run(cmd) {
  try {
    return execSync(`node src/calculator.js ${cmd}`, { encoding: 'utf8' }).trim();
  } catch (err) {
    // attach stderr as string for assertions
    err.stderrStr = err.stderr ? err.stderr.toString() : '';
    throw err;
  }
}

describe('Calculator CLI', function() {
  it('adds', function() { assert.strictEqual(run('add 2 3'), '5'); });
  it('subtracts', function() { assert.strictEqual(run('subtract 5 2'), '3'); });
  it('multiplies', function() { assert.strictEqual(run('multiply 4 6'), '24'); });
  it('divides', function() { assert.strictEqual(run('divide 8 2'), '4'); });
  it('modulo', function() { assert.strictEqual(run('mod 10 3'), '1'); });
  it('power', function() { assert.strictEqual(run('pow 2 3'), '8'); });
  it('sqrt', function() { assert.strictEqual(run('sqrt 9'), '3'); });
  it('sqrt negative should error', function() {
    try {
      run('sqrt -9');
      throw new Error('Expected error for sqrt negative');
    } catch (err) {
      const stderr = err.stderrStr || err.message || '';
      if (!/square root/i.test(stderr) && (err.status === 0 || typeof err.status === 'undefined')) {
        throw new Error('Expected non-zero exit or square root error message');
      }
    }
  });
});
