// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const frequentElement = arr => {
    let count = 0;
    let frequentCount = 1;
    let element;
    for (const item of arr) {
        for (const item2 of arr) {
            if(item2 === item) {
                count++;
            }
            if (count > frequentCount) {
                frequentCount = count;
                element = item;
            }
        }
        count = 0;
    }
    return element;
}

console.log(frequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));