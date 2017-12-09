var fibonacciSum = (input) => {
	if(input < 1) {
		throw Error("Invalid input to fibonacciSum");
	}

	if(input === 1) {
		return 1;
	}

	if(input === 2) {
		return 2;
	}

	return fibonacciSum(input - 2) + fibonacciSum(input - 1);
}

var fibonacciArray = (length) => {
	if(length < 1) {	
		return [];
	}

	if(length == 1) {
		return [1];
	}

	if(length == 2) {
		return [1, 2];
	}

	var fibonacciTerms = [1, 2];

	for(var i = 3; i <= length; i++) {
		fibonacciTerms.push(fibonacciTerms[i - 2] + fibonacciTerms[i - 3]);
	}

	return fibonacciTerms;
}

var fibonacciArrayWhileLessThan = (constraint) => {
	if(constraint < 2) {	
		return [];
	}

	if(constraint == 2) {
		return [1];
	}

	if(constraint == 3) {
		return [1, 2];
	}

	var fibonacciTerms = [1, 2];

	var newTerm = 3;
	var currentTermIndex = 2;

	while(newTerm < constraint) {
		fibonacciTerms.push(newTerm);
		currentTermIndex++;

		newTerm = fibonacciTerms[currentTermIndex - 2] + fibonacciTerms[currentTermIndex - 1];
	}

	return fibonacciTerms;
}

var sumOfArrayWhileLessThan = (constraint) => {
	return fibonacciArrayWhileLessThan(constraint).reduce((sum, currentValue) => sum + currentValue, 0);
}

var sumOfEvenArrayTermsWhileLessThan = (constraint) => {
	return fibonacciArrayWhileLessThan(constraint).reduce((sum, currentValue) => currentValue % 2 === 0 ? sum + currentValue : sum, 0);
}

module.exports = {
	sum: (input) => fibonacciSum(input),
	array: (input) => fibonacciArray(input),
	arrayWhileLessThan: (input) => fibonacciArrayWhileLessThan(input),
	sumOfArrayWhileLessThan: (input) => sumOfArrayWhileLessThan(input),
	sumOfEvenTermsOfArrayWhileLessThan: (input) => sumOfEvenArrayTermsWhileLessThan(input)
}