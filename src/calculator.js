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
 * Usage examples:
 *   node src/calculator.js add 2 3        # 5
 *   node src/calculator.js subtract 5 2   # 3
 *   node src/calculator.js multiply 4 6   # 24
 *   node src/calculator.js divide 8 2     # 4
 *   node src/calculator.js mod 10 3       # 1
 *   node src/calculator.js pow 2 3        # 8
 *   node src/calculator.js sqrt 9         # 3
 */

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
  if (Number.isNaN(n)) {
    console.error('Error: operand must be a valid number');
    process.exit(1);
  }
  if (n < 0) {
    console.error('Error: square root of negative number');
    process.exit(1);
  }
  console.log(Math.sqrt(n));
  process.exit(0);
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
    if (b === 0) {
      console.error('Error: division by zero');
      process.exit(1);
    }
    result = a / b;
    break;
  case 'mod':
  case 'modulo':
  case '%':
    // modulo
    if (b === 0) {
      console.error('Error: modulo by zero');
      process.exit(1);
    }
    result = a % b;
    break;
  case 'pow':
  case '^':
  case '**':
    // exponentiation
    result = Math.pow(a, b);
    break;
  default:
    console.error(`Unknown operation: ${op}`);
    printUsageAndExit();
}

// Print result to stdout
console.log(result);
