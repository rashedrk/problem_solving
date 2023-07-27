// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number

const secondSmallest = arr => {
    const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index); // remove duplicates
    uniqueArr.sort();
    return uniqueArr[1];
}

console.log(secondSmallest([4, 1, 5, 1, 3, 2]));