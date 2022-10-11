const stringLength = require('./Task-1');

test('length for bottle should be 6', () => {
  expect(stringLength('bottle')).toBe(6);
})

test('throw Error', () => {
  expect(() => {stringLength('kenya is a great counnty')}).toThrow();
})

test('throw Error', () => {
  expect(() => {stringLength('apocalipto')}).toThrow();
})