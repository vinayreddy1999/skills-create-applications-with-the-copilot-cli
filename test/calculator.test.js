const assert = require('assert');
const { execSync } = require('child_process');

function run(cmd) {
  try {
    return execSync(`node src/calculator.js ${cmd}`, { encoding: 'utf8' }).trim();
  } catch (err) {
    console.error(err.stdout ? err.stdout.toString() : '', err.stderr ? err.stderr.toString() : '');
    throw err;
  }
}

try {
  // addition
  assert.strictEqual(run('add 2 3'), '5');
  // subtraction
  assert.strictEqual(run('subtract 5 2'), '3');
  // multiplication
  assert.strictEqual(run('multiply 4 6'), '24');
  // division
  assert.strictEqual(run('divide 8 2'), '4');

  console.log('All tests passed');
} catch (err) {
  console.error('Test failure:', err.message);
  process.exit(1);
}
