// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---
function findMaxEven(inputArr) {
    let maxElement=0;

    for (let i = 0; i < inputArr.length; i++) {
        let element = inputArr[i];
        if ((element % 2 == 0) && (i == 0)) {
            maxElement = element;
        }
        if ((element % 2 == 0) && (element >= maxElement)  && (i > 0)) {
            maxElement = element;
        }
    }

    return maxElement;
}

// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`);
