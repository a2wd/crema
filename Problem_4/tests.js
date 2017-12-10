const assert = require('assert');
const palindrome = require('./palindrome.js');

describe('palindrome', () => {
	it('should find the largest palindrome which is a product of 1-digit numbers', () => {
		assert.equal(9, palindrome.largestAsAProductOfNumbersOfLength(1));
	});

	it('should find the largest palindrome which is a product of 2-digit numbers', () => {
		assert.equal(9009, palindrome.largestAsAProductOfNumbersOfLength(2));
	});

	it('should find the largest palindrome which is a product of 3-digit numbers', () => {
		assert.equal(906609, palindrome.largestAsAProductOfNumbersOfLength(3));
	});
});