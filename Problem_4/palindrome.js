var isPalindrome = (number) => {
	return number.toString().split('').reverse().join('') === number.toString();
}

var largestPalindromeWhichIsAProductOfNumbersOfLength = (length) => {
	const maxSize = Math.pow(10, length);
	const minSize = Math.pow(10, length - 1);

	var palindromes = [];

	var numberA = maxSize - 1;
	var numberB = maxSize - 1;

	while(numberA > minSize) {
		var numberB = numberA;

		while(numberB > minSize) {
			var product = numberB * numberA;

			if(isPalindrome(product)) {
				palindromes.push(product);
			}

			numberB--;
		}

		numberA--;
	}

	return Math.max.apply(Math, palindromes);
}

module.exports = {
	largestAsAProductOfNumbersOfLength: (input) => largestPalindromeWhichIsAProductOfNumbersOfLength(input)
}