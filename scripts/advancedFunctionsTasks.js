// ---------------------------------- Task 1 ---------------------------------- //
/* DESCRIPTION:
Write a function named `customMap` that should take two arguments:
an array and a callback function that applies a specific operation
to each element in the array (like square, i.e. takes `x` and returns `x` * `x`).

The customMap function should return a new array with the
results of calling the callback function on every element in the input array.
*/

// YOUR CODE HERE
// Define customMap function using function declaration
let square = x => x ** 2;
function customMap(nums, square) {
    let squared = [];

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        let newElement = square(element);
        squared.push(newElement);
    }

    return squared;
}
// Define square function using arrow syntax

// TEST
// const nums = [1, 2, 3, 4];
// const squared = customMap(nums, square);
// console.log(squared);  // Expected output: [1, 4, 9, 16]

// ---------------------------------- Task 2 ---------------------------------- //
/* DESCRIPTION:
    Write a function named `customFilter` that should take two arguments:
    an array and a callback function (isPositive) that takes one argument (`x`) and
    returns `true` if the argument is positive (i.e.x > 0) and `false`
    if `x` is negative.

    The customFilter function should return a new array containing
    only the elements for which the callback function returns `true`.
*/

// YOUR CODE HERE
// Define customFilter function using function declaration
let isPositive = x => x > 0 ? true : false;

function customFilter(nums, isPositive) {
    let resultArr = [];

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        if (isPositive(element)) {
            resultArr.push(element);
        }
    }
    return resultArr;
}
// Define isPositive function using arrow syntax


// TEST
//  const nums = [-1, 1, -2, 3, 4];
//  const positiveNumbers = customFilter(nums, isPositive);
//  console.log(positiveNumbers); // Expected output: [1, 3, 4]


// ---------------------------------- Task 3 ---------------------------------- //
/* DESCRIPTION:
Implement a function `compose` that takes two functions (double and increment)
as arguments and returns a new function that, when called, calls the first function,
passes its result to the second function, and returns the result of the second function.
*/

// YOUR CODE HERE
// Define compose function using function declaration

// Define double and increment functions using arrow syntax
let double = x => x * 2;
let increment = x => x + 1;

function compose(f1, f2) {
    // return function (x) {
    //     let res1 = f1(x);
    //     return f2(res1);
    //};
    return (x)=>f2(f1(x));
}

// TEST
const doubleThenIncrement = compose(double, increment);
console.log(doubleThenIncrement(3)); // Expected output: 7