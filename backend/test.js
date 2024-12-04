const { formatString } = require('./utils/formatString.cjs');
const { calculate } = require('./utils/calculate.cjs');

describe('formatString', () => {
  it('should format the equation correctly', () => {
    const input = {  num1: '2+2' };
    const result = formatString(input);
    expect(result).toBe('2+2');
  });
});

describe('calculate', () => {
  it('it should solve the equation correctly', () => {
    const input = "x-2 = 4" ;
    const result = calculate(input);
    expect(result).toBe('6');
  });
});