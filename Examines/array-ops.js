const doubled = numbers.map(x => x * 2) //Transform values
const filtered = numbers.filter(x => x > 2)//Map Array with only values that match
const found = numbers.find(x => x > 2)//find element that meets condition
numbers.forEach(x => console.log(x))//Perform operation with each array item
const sum = numbers.reduce((acc, x) => acc + x, 0)//Sum up array values
console.log(sum) // Output: 15