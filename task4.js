// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findPair = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
            let sum = arr[i] + arr[i+1];
            if(sum === target)
            return [i, i+1];
    }
}

console.log(findPair([1, 3, 6, 8, 11, 15], 9));