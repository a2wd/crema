const NANOSECONDS_PER_SECOND = 1e9;
const multiplesOfThreeAndFive = require('./multiplesOfThreeAndFive.js');

const startTime = process.hrtime();
const allMultiplesUnder1000 = multiplesOfThreeAndFive(999);
const timeToRun = process.hrtime(startTime);

const timeDifferenceToNanoseconds = (hrTimeDifference) => {
	return hrTimeDifference[0] * NANOSECONDS_PER_SECOND + hrTimeDifference[1];
}

console.log("The sum of all multiples of 3 and 5 under 1000 is " + allMultiplesUnder1000)
console.log(`This was calculated in ${timeDifferenceToNanoseconds(timeToRun)} nanoseconds`);