#!/usr/bin/env node
/**
 * calculator.js
 * Supported operations:
 * - addition (+)       : add
 * - subtraction (-)    : subtract
 * - multiplication (*) : multiply
 * - division (/)       : divide
 * - modulo (%)         : mod, modulo
 * - exponentiation (^) : pow, ^, **
 * - square root        : sqrt (unary)
 *
 * Exposed functions:
 * - modulo(a, b)
 * - power(base, exponent)
 * - squareRoot(n)
 *
 * Usage examples:
 *   node src/calculator.js add 2 3        # 5
 *   node src/calculator.js subtract 5 2   # 3
 *   node src/calculator.js multiply 4 6   # 24
 *   node src/calculator.js divide 8 2     # 4
 *   node src/calculator.js mod 10 3       # 1
 *   node src/calculator.js pow 2 3        # 8
 *   node src/calculator.js sqrt 9         # 3
 */

// Exportable functions
function modulo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) {
    throw new TypeError('modulo: both arguments must be numbers');
  }
  if (b === 0) {
    throw new RangeError('modulo by zero');
  }
  return a % b;
}

function power(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number' || Number.isNaN(base) || Number.isNaN(exponent)) {
    throw new TypeError('power: both arguments must be numbers');
  }
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) {
    throw new TypeError('squareRoot: argument must be a number');
  }
  if (n < 0) {
    throw new RangeError('square root of negative number');
  }
  return Math.sqrt(n);
}

function printUsageAndExit() {
  console.error('Usage: node src/calculator.js <operation> <num1> [<num2>]');
  console.error('Operations: add, subtract, multiply, divide, mod, pow, sqrt');
  process.exit(1);
}

const args = process.argv.slice(2);
if (!args || args.length === 0) printUsageAndExit();

const op = args[0].toLowerCase();

// Handle unary operation: sqrt
if (op === 'sqrt') {
  if (args.length < 2) printUsageAndExit();
  const n = Number(args[1]);
  try {
    const res = squareRoot(n);
    console.log(res);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

// Binary operations
if (args.length < 3) printUsageAndExit();

const a = Number(args[1]);
const b = Number(args[2]);
if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: operands must be valid numbers');
  process.exit(1);
}

let result;
try {
  switch (op) {
    case 'add':
    case '+':
      // addition
      result = a + b;
      break;
    case 'subtract':
    case '-':
      // subtraction
      result = a - b;
      break;
    case 'multiply':
    case 'x':
    case '*':
      // multiplication
      result = a * b;
      break;
    case 'divide':
    case '/':
      // division
      if (b === 0) throw new RangeError('division by zero');
      result = a / b;
      break;
    case 'mod':
    case 'modulo':
    case '%':
      // modulo
      result = modulo(a, b);
      break;
    case 'pow':
    case '^':
    case '**':
      // exponentiation
      result = power(a, b);
      break;
    default:
      throw new Error(`Unknown operation: ${op}`);
  }
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}

// Print result to stdout
console.log(result);

// Export functions for programmatic use (if required)
module.exports = { modulo, power, squareRoot };
