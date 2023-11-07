import { intToRomanNumeral } from './../src/js/romannumerals.js';

describe('intToRomanNumeral', () => {
  test('it should return a message if int is invalid', () => {
    const userInput = intToRomanNumeral("!");
    expect(userInput).toEqual("Valid Roman numerals are between a minimum value of 1 and maximum value of 3999.");
  });

  test('it should convert 1 to I"', () => {
    const result = intToRomanNumeral(1);
    expect(result).toEqual('I');
  });

  test('it should convert 2 to II"', () => {
    const result = intToRomanNumeral(2);
    expect(result).toEqual('II');
  });

  test('it should convert 1995 to MCMXCV"', () => {
    const result = intToRomanNumeral(1995);
    expect(result).toEqual('MCMXCV');
  });
});