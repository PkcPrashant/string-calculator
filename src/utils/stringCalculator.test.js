import { sumFromString } from './stringCalculator';

test('returns 0 for empty string', () => {
    expect(sumFromString('')).toBe(0);
});

test('returns the number itself for single input', () => {
    expect(sumFromString('1')).toBe(1);
});

test('adds two numbers separated by commas', () => {
    expect(sumFromString('1,5')).toBe(6);
});

test('handles multiple numbers', () => {
    expect(sumFromString('1,2,3,4')).toBe(10);
});

test('handles new lines as delimiters', () => {
    expect(sumFromString('1\n2')).toBe(3);
});

test('handles new lines & comma as delimiters for single string', () => {
    expect(sumFromString('1\n2,3')).toBe(6);
});

test('throws error for negative numbers', () => {
    expect(() => sumFromString('1,-2')).toThrow('negative numbers not allowed: -2');
});

test('shows all negatives in error message', () => {
    expect(() => sumFromString('-1,-2,-3')).toThrow('negative numbers not allowed: -1, -2, -3');
});

test('handles custom delimiters', () => {
    expect(sumFromString('//;\n1;2')).toBe(3);
});
