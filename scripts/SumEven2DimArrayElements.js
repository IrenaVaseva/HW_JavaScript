// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните 
//  елементи на подаденият й двумерен масив.

// ---> YOUR CODE HERE <---
function SumEven2DimArrayElements(inputArr) {
    let len = inputArr.length;
    let suma = 0;

    for (let i = 0; i < len; i++) {
        let arr = inputArr[i];

        for (let j = 0; j < arr.length; j++) {
            const element = arr[j];

            if (element % 2 == 0) {
                suma += element;
            }

        }
    }
    return suma;
}
// TEST:
let arr = [
    [1, 2, 3],
    [4, 5, 6]
];

let sum = SumEven2DimArrayElements(arr);
console.log(sum);

// expected output: 12
