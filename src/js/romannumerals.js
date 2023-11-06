export function intToRomanNumeral(int) {
  if (isNaN(int) || int < 1 || int > 3999 )
  return "Valid Roman numerals are between a minimum value of 1 and maximum value of 3999."

  const allRomanNumerals = {
    symbol: 'M', value: 1000,
    symbol: 'CM', value: 900,
    symbol: 'D', value: 500,
    symbol: 'CD', value: 400,
    symbol: 'C', value: 100,
    symbol: 'XC', value: 90,
    symbol: 'L', value: 50,
    symbol: 'XL', value: 40,
    symbol: 'X', value: 10,
    symbol: 'IX', value: 9,
    symbol: 'V', value: 5,
    symbol: 'IV', value: 4,
    symbol: 'I', value: 1,
  };

  function conversion(x) {
    if (x === 0) {
      return "";
    }
  
  // Symbol  Value
  // I       1
  // V       5
  // X       10
  // L       50
  // C       100
  // D       500
  // M       1,000


}