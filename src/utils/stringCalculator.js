export function sumFromString(numbers) {
    if (!numbers) return 0;

    const delimiters = [',', '\n'];
    let customDelimiter = numbers.match(/^\/\/(.+)\n/);
    if (customDelimiter) {
        delimiters.push(customDelimiter[1]);
        numbers = numbers.split('\n').slice(1).join('\n');
    }

    const regex = new RegExp(`[${delimiters.join('')}]`);
    const numberArray = numbers.split(regex).map(Number);

    const negatives = numberArray.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numberArray.reduce((sum, num) => sum + (num || 0), 0);
}
