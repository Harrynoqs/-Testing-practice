const reverseString = require('./Task-2')

test('expected reverse string to be for olleh', () => {
    //Arrange
    const string = 'olleh';
    // Act 
    const reverseString = reverseString(string);
    //Assert
    expect(reverseString).toBe('hello');
  });