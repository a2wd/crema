const NANOSECONDS_PER_SECOND = 1e9;
const primeFactors = require('./primeFactors.js');

const startTime = process.hrtime();
const primeFactorsOfALargeNumber = primeFactors(600851475143);
const largestPrimeFactorInArray = primeFactorsOfALargeNumber[primeFactorsOfALargeNumber.length - 1];
const timeToRun = process.hrtime(startTime);

const timeDifferenceToNanoseconds = (hrTimeDifference) => {
	return hrTimeDifference[0] * NANOSECONDS_PER_SECOND + hrTimeDifference[1];
}

console.log(`The largest prime factor of 600,851,475,143 is ${largestPrimeFactorInArray}`);
console.log(`This was calculated in ${timeDifferenceToNanoseconds(timeToRun)} nanoseconds`);