import test from 'node:test';
import assert from 'node:assert/strict';

import { add, subtract, multiply, divide } from './calculator.js';

test('add: 1 + 1 = 2', () => {
  assert.equal(add(1, 1), 2);
});

test('subtract: 5 - 3 = 2', () => {
  assert.equal(subtract(5, 3), 2);
});

test('multiply: 3 * 4 = 12', () => {
  assert.equal(multiply(3, 4), 12);
});

test('divide: 10 / 2 = 5', () => {
  assert.equal(divide(10, 2), 5);
});

test('divide: soporta negativos', () => {
  assert.equal(divide(-6, 3), -2);
});

test('divide: soporta resultados decimales', () => {
  assert.equal(divide(1, 4), 0.25);
});

test('divide: lanza Error si el divisor es 0', () => {
  assert.throws(() => divide(1, 0), { message: 'Division by zero' });
});
