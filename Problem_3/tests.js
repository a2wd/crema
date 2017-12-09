const assert = require('assert');
const primeFactors = require('./primeFactors.js');

describe('primeFactors', () => {
	it('should return return [2, 2, 2, 3] for 24', () => {
		assert.deepEqual([2, 2, 2, 3], primeFactors(24));
	});

	it('should return return [5, 7, 13, 29] for 13195', () => {
		assert.deepEqual([5, 7, 13, 29], primeFactors(13195));
	});
});