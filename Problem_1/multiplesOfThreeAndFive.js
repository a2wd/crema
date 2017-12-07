const multiplesOfThreeAndFive = (input) => {
	var multiples = [];

	for(var i = input; i > 0; i--) {
		if(i % 5 === 0 || i % 3 === 0) {
			multiples.push(i);
		}
	}

	return multiples;
}

module.exports = function(input) {
	const allMultiples = multiplesOfThreeAndFive(input);

	return allMultiples.reduce((total, currentValue) => total + currentValue, 0)
}