export function intToRomanNumeral(int) {
  if (isNaN(int) || int < 1 || int > 3999 )
  return "Valid Roman numerals are between a minimum value of 1 and maximum value of 3999."

  const allRomanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  
  // Symbol  Value
  // I       1
  // V       5
  // X       10
  // L       50
  // C       100
  // D       500
  // M       1,000


}