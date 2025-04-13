//Array basics operaions.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Filter even numbers
let evenNumbers = numbers.filter((num) => num % 2 === 0); 

// find sum using reduce()
let sumOfEven = evenNumbers.reduce((acc, curr) => acc + curr, 0);


console.log("Even Numbers:", evenNumbers); // ➜ [2, 4, 6, 8]
console.log("Sum of Even Numbers:", sumOfEven); // ➜ 20

let arr=[1,2,4,5,6,7,8];
var ans=arr.filter(function(val){
  if(val>3) {
    return true;
  }
  else return false;
})
console.log(ans);

var ans2=arr.find(function(val){
  if(val===4)  return val;
   
});
console.log(ans2);

