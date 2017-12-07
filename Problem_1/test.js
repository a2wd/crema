const assert = require('assert');
const multiplesOfThreeAndFive = require('./multiplesOfThreeAndFive.js');

describe('multiplesOfThreeAndFive', function() {
	it('should return 0 when passed 0', function() {
		assert.equal(0, multiplesOfThreeAndFive(0));
	});

	it('should return 3 when passed 3', function() {
		assert.equal(3, multiplesOfThreeAndFive(3));
	});

	it('should return 8 when passed 5', function() {
		assert.equal(8, multiplesOfThreeAndFive(5));
	})

	it('should return 23 when passed 9', function() {
		assert.equal(23, multiplesOfThreeAndFive(9));
	})
});