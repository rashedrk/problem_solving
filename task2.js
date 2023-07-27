// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const positiveSum = arr => {
    let sum = 0;
    arr.map( num => {
        if (num > 0) {
            sum += num;
        }
    })
    return sum;
}

console.log(positiveSum([2, -5, 10, -3, 7]));