
//Fromat of the test file
describe('First test', () => {
  let testVariable: any;

  beforeEach(() => {
    testVariable = {};
  });

  it('Should Return the Correct Givn User', () => {
    //arrange
    testVariable.a = false;

    //act
    testVariable.a = true;

    ///assert
    expect(testVariable.a).toBe(true);
  });
});
