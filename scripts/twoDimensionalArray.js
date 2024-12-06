let fruitsData = [
    ["apple", "orange", "cherry"],
    [1.2, 2.0, 3.5],
];

// TASK: log in console each fruit and its price

// YOUR CODE HERE
let countFruits = fruitsData[0].length;
for (let i = 0; i < countFruits; i++) {
    let fruit = fruitsData[0][i];
    let price = fruitsData[1][i];

    console.log(`${fruit} = ${price.toFixed(1)}`);
}

// EXPECTED OUTPUT:
// apple = 1.2,
// orange = 2.0,
// cherry = 3.5