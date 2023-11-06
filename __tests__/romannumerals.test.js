import { intToRomanNumeral } from './../src/js/romannumerals.js';

describe('intToRomanNumeral', () => {
  test('it should return a message if int is invalid', () => {
    const userInput = intToRomanNumeral("!");
    expect(userInput).toEqual("Valid Roman numerals are between a minimum value of 1 and maximum value of 3999.");
  });
});