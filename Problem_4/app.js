const NANOSECONDS_PER_SECOND = 1e9;
const palindrome = require('./palindrome.js');

const startTime = process.hrtime();
const largestPalindrome = palindrome.largestAsAProductOfNumbersOfLength(3);
const timeToRun = process.hrtime(startTime);

const timeDifferenceToNanoseconds = (hrTimeDifference) => {
	return hrTimeDifference[0] * NANOSECONDS_PER_SECOND + hrTimeDifference[1];
}

console.log(`The largest palindrome which is a product of numbers of length 3 is ${largestPalindrome}`);
console.log(`This was calculated in ${timeDifferenceToNanoseconds(timeToRun)} nanoseconds`);