module.exports = (number) => {
	var factors = [];
	var divisor = 2;
	var currentNumber = number;

	while(currentNumber > 1) {
		while(currentNumber % divisor == 0) {
			factors.push(divisor);
			currentNumber /= divisor;
		}

		divisor++;
	}

	return factors;
}