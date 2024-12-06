// TASK: Да се дефинира функция, която приема 2 масива и връща масив, чиито елементи са сумата от елементите на двата масива (елемент по елемент).

// YOUR CODE HERE

function sumArrays(arr1, arr2) {
    let lenArr = arr1.length;
    let resultArr = [];

    for (let i = 0; i < lenArr; i++) {
        let sum = arr1[i] + arr2[i];
        resultArr.push(sum);
    }

    return resultArr;
}
// TEST:
console.log(sumArrays([1, 2, 3], [4, 5, 6]));
// OUTPUT:
// [ 5, 7, 9 ]
