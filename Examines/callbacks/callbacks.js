//basic callback
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}
  
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
  
myCalculator(5, 5, myDisplayer);


// more callback
const myNumbers = [1,2,3,4,5,6];

function prettyPrint(val){
    type = typeof val
    console.log(val+" : "+type)
}

function Iter(numbers, callback) {
  for (const x of numbers) {
    callback(x)
  }
  return myArray;
}