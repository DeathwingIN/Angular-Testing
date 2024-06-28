import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

it('should display weak if value is passed  5', () => {

  const pipe = new StrengthPipe();
  expect (pipe.transform(5)).toEqual('5 (weak)');
})
it('should display strong if value is passed 10', () => {

  const pipe = new StrengthPipe();
  expect (pipe.transform(11)).toEqual('11 (strong)');
})
it('should display strongest if value is passed 20', () => {

  const pipe = new StrengthPipe();
  expect (pipe.transform(22)).toEqual('22 (strongest)');
})


});
