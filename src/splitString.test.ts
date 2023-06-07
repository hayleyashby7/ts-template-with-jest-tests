import { splitString } from './splitString';

describe('split string', () => {
	it('Accepts a string input', () => {
		// Arrange
		const input: String = 'test';
		const expected: Array<String> = [''];

		// Act
		const result = splitString(input);

		// Assert
		expect(result).toEqual(expected);
    });
    
    it('Splits a string of even characters',() => {
		// Arrange
		const input: String = 'test';
		const expected: Array<String> = ['te', 'st'];

		// Act
		const result = splitString(input);

		// Assert
		expect(result).toEqual(expected);
    });
});
