const assert = require('assert');
const fibonacci = require('./fibonacci.js')

describe('fibonacciSum', () => {
	it('should return 1 when passed 1', () => {
		assert.equal(1, fibonacci.sum(1));
	});

	it('should return 2 when passed 2', () => {
		assert.equal(2, fibonacci.sum(2));
	});

	it('should return 3 when passed 3', () => {
		assert.equal(3, fibonacci.sum(3));
	});

	it('should return 5 when passed 4', () => {
		assert.equal(5, fibonacci.sum(4));
	});

	it('should return 8 when passed 5', () => {
		assert.equal(8, fibonacci.sum(5));
	});

	it('should return 21 when passed 5', () => {
		assert.equal(21, fibonacci.sum(7));
	});
	
	it('should return 34 when passed 5', () => {
		assert.equal(34, fibonacci.sum(8));
	});
	
	it('should return 55 when passed 5', () => {
		assert.equal(55, fibonacci.sum(9));
	});
	
	it('should return 89 when passed 5', () => {
		assert.equal(89, fibonacci.sum(10));
	});
});

describe('fibonacciArray', () => {
	it('should return an empty array when passed 0', () => {
		assert.deepEqual([], fibonacci.array(0))
	});

	it('should return the first 10 terms when passed 10', () => {
		assert.deepEqual([1, 2, 3, 5, 8, 13, 21, 34, 55, 89], fibonacci.array(10));
	});
});

describe('fibonacciArrayWhileLessThan', () => {
	it('should return no terms when passed 0 or 1', () => {
		assert.deepEqual([], fibonacci.arrayWhileLessThan(0));
		assert.deepEqual([], fibonacci.arrayWhileLessThan(1));
	});

	it('should return all the terms less than 2 when passed 3', () => {
		assert.deepEqual([1, 2], fibonacci.arrayWhileLessThan(3));
	});
	it('should return all the terms less than 5 when passed 5', () => {
		assert.deepEqual([1, 2, 3], fibonacci.arrayWhileLessThan(5));
	});
	it('should return all the terms less than 10 when passed 10', () => {
		assert.deepEqual([1, 2, 3, 5, 8], fibonacci.arrayWhileLessThan(10));
	});
});

describe('sumOfFibonacciArrayWhileLessThan', () => {
	it('should return 3 for the terms under 3', () => {
		assert.equal(3, fibonacci.sumOfArrayWhileLessThan(3));
	})

	it('should return 6 for the terms under 5', () => {
		assert.equal(6, fibonacci.sumOfArrayWhileLessThan(5));
	})

	it('should return 11 for the terms under 6', () => {
		assert.equal(11, fibonacci.sumOfArrayWhileLessThan(6));
	})
});

describe('sumOfEvenTermsInFibonacciArrayWhileLessThan', () => {
	it('should return 2 for the terms under 3', () => {
		assert.equal(2, fibonacci.sumOfEvenTermsOfArrayWhileLessThan(3));
	});

	it('should return 10 for the terms under 10', () => {
		assert.equal(10, fibonacci.sumOfEvenTermsOfArrayWhileLessThan(10));
	});

	it('should return 44 for the terms under 90', () => {
		assert.equal(44, fibonacci.sumOfEvenTermsOfArrayWhileLessThan(90));
	});
});