export function intToRomanNumeral(int) {
  if (isNaN(int) || int < 1 || int > 3999 )
  return "Valid Roman numerals are between a minimum value of 1 and maximum value of 3999."

  const allRomanNumerals = [
    {symbol: 'M', value: 1000},
    {symbol: 'CM', value: 900},
    {symbol: 'D', value: 500},
    {symbol: 'CD', value: 400},
    {symbol: 'C', value: 100},
    {symbol: 'XC', value: 90},
    {symbol: 'L', value: 50},
    {symbol: 'XL', value: 40},
    {symbol: 'X', value: 10},
    {symbol: 'IX', value: 9},
    {symbol: 'V', value: 5},
    {symbol: 'IV', value: 4},
    {symbol: 'I', value: 1},
  ];

  function converter(x) {
    if (x === 0) {
      return "";
    }

    let conversion = "";
    // for each numeral object 
    allRomanNumerals.forEach(numeral => {
      // if this is true, we can use the corresponding roman numeral
      if (x >= numeral.value) {
        // & append the symbol to the conversion string
        conversion += numeral.symbol;
        // then subtract the value from x to account for the part of the integer that has been converted
        x -= numeral.value;
      }
    });
    return conversion + converter(x);
  }
  return converter(int);
}