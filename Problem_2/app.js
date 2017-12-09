const NANOSECONDS_PER_SECOND = 1e9;
const fibonacci = require('./fibonacci.js');

const startTime = process.hrtime();
const sumOfevenFibonacciTermsLessThanFourMillion = fibonacci.sumOfEvenTermsOfArrayWhileLessThan(4000000);
const timeToRun = process.hrtime(startTime);

const timeDifferenceToNanoseconds = (hrTimeDifference) => {
	return hrTimeDifference[0] * NANOSECONDS_PER_SECOND + hrTimeDifference[1];
}

console.log(`The sum of all even fibonacci terms under 4,000,000 is ${sumOfevenFibonacciTermsLessThanFourMillion}`);
console.log(`This was calculated in ${timeDifferenceToNanoseconds(timeToRun)} nanoseconds`);