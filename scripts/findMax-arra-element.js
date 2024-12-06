let numbers = [1,2,7,1,4,3];

// set max initial value to be the first array element:
let max = numbers[0];

// find max number:
for(let i=0; i<numbers.length; i++){
	let number = numbers[i];
	// if current number is bigger than max, set max to current number:
	if(number>max){
		max = number;
	}
}

console.log(`The max of ${numbers} is ${max}`);




