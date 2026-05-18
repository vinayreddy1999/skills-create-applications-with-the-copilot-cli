#!/usr/bin/env node
/**
 * calculator.js
 * Supported operations:
 * - addition (+)       : add
 * - subtraction (-)    : subtract
 * - multiplication (*) : multiply
 * - division (/)       : divide
 *
 * Usage examples:
 *   node src/calculator.js add 2 3        # 5
 *   node src/calculator.js subtract 5 2   # 3
 *   node src/calculator.js multiply 4 6   # 24
 *   node src/calculator.js divide 8 2     # 4
 */

function printUsageAndExit() {
  console.error('Usage: node src/calculator.js <operation> <num1> <num2>');
  console.error('Operations: add, subtract, multiply, divide');
  process.exit(1);
}

const [, , op, aRaw, bRaw] = process.argv;
if (!op || !aRaw || !bRaw) printUsageAndExit();

const a = Number(aRaw);
const b = Number(bRaw);
if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: operands must be valid numbers');
  process.exit(1);
}

let result;
switch (op.toLowerCase()) {
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
  default:
    console.error(`Unknown operation: ${op}`);
    printUsageAndExit();
}

// Print result to stdout
console.log(result);
