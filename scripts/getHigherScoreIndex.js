// GIVEN:
let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];

// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---
function getHighestScoreIndex() {
    let maxScore = scores[0];
    let maxScoreIndex = 0;
    for (let i = 1; i < scores.length; i++) {
        let element = scores[i];

        if (element >= maxScore) {
            maxScore = element;
            maxScoreIndex = i;
        }
    }
    return maxScoreIndex;
}

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---
let index=getHighestScoreIndex();
let nameStudent=students[index];

console.log(`${nameStudent} has the higest score: ${scores[index]}`)
// expected output
// Maria has the higest score: 6


