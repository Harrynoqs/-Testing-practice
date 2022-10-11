const capitalize = require('./Task-4')

test('expected the string to be capitalized = "Andrea" ', () => {
    //Arrange
    const str = 'andrea';
    //Act 
    const capitalizedStr = capitalize(str);
    //Assert
    expect(capitalizedStr).toBe('Andrea');
  })