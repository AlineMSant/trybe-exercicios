
const numberChecker = (myNumber, randomNumber) => myNumber === randomNumber;

const lotteryResult = (myNumber, função) => {
    const randomNumber = Math.floor((Math.random() * 5) +1);

    return função(myNumber, randomNumber) ? 'Luck day, you won!' : 'Try Again!'
}

console.log(lotteryResult(3, numberChecker));




