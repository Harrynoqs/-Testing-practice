const calculator = require('./Task-3')

describe(' simple calculator class, which  have 4 methods: add, subtract, divide, and multiply', () => {

    describe('add tests', () => {
      test('should pass test1', () => {
        expect(calculator.add(1, 3)).toBe(4);
      })
      test('should pass test2', () => {
        expect(calculator.add(2, 3)).toBe(5);
      })
      test('should pass test3', () => {
        expect(calculator.add(4, 5)).toBe(9);
      })
    });

    describe('substract tests', () => {
      test('should pass test1', () => {
        expect(calculator.subtract(10, 9)).toBe(1);
      })
      test('should pass test2', () => {
        expect(calculator.subtract(9, 8)).toBe(1);
      })
      test('should pass test3', () => {
        expect(calculator.subtract(8, 7)).toBe(1);
      })
    });

    describe('multiply tests', () => {
      test('should pass test1', () => {
        expect(calculator.multiply(1, 3)).toBe(3);
      })
      test('should pass test2', () => {
        expect(calculator.multiply(4, 4)).toBe(16);
      })
      test('should pass test3', () => {
        expect(calculator.multiply(3, -6)).toBe(-18);
      })
    });

    describe('devide tests', () => {
      test('should pass test1', () => {
        expect(calculator.divide(1, 1)).toBe(1);
      })
      test('should pass test2', () => {
        expect(calculator.divide(10, 5)).toBe(2);
      })
      test('should pass test3', () => {
        expect(calculator.divide(10, 4)).toBe(2.5);
      })
    });

  });