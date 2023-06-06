
// 1. Create a function that will be able to convert figures from Fahrenheit to Celsius.

function fahToCel(F){
    let numerator = (F-32)*5;
    let celsius = (numerator/9);
    console.log(celsius +"ͦ celsius");
}
fahToCel(50);

  // answer: 10 degree celsius

// 2. Create a function that will calculate the average of numbers in an array.
function calculateAverage(digits){
   const sum = digits.reduce(
      (accumulator, currentValue) => accumulator + currentValue
   );
   const average = sum / digits.length;
   console.log(average);
}
const digits = [2, 3, 5, 6, 9];
calculateAverage(digits);
   // Answer: 5

// 3. Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
 function isDivisible(n,x,y){
    if (n % x === 0 && n % y === 0){
    return true;
 }else {
    return false;
 }
}
 console.log(isDivisible(20,6,5));
   //  Answer: False

// 4. Create a function that will output the first 100 prime numbers.

function primeNum(){
   let nums = [];

   for(let b = 2; b <= 100; b++){
      let isPrime = true;
      for(let a = 2; a <= Math.sqrt(b); a++){
         if(b % a === 0){
            isPrime = false;
            break;
         }
      }
      if (isPrime){
         nums.push(b);
      }
   }
   return nums;
}
console.log(primeNum(100));

// 5.	Create a function that will return a boolean specifying if a number is a prime number

function isPrime(number) {
   if(number < 2){
      return false;
   }
   for(let c = 2; c <= Math.sqrt(number); c++) {
      if(number % c === 0){
         return false;
      }
      }return true;}
console.log(isPrime(17));
   // Answer: True;

//6.	Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

function getPositiveNumbers(numbers){
   const positiveNumbers = numbers.filter((number) => number > 0);
   console.log(positiveNumbers);
}
const numbers = [2, 4, -5, -7, 8, -20];
getPositiveNumbers(numbers);
  //Answer: (3) [2, 4, 8]

//7. 	Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

   for(let i = 1; i <= 100; i++){
      if(i % 3 === 0 && i % 5 === 0){
         console.log("FizzBuzz");

      }else if(i % 3 === 0){
         console.log("Fizz");

      }else if(i % 5 === 0){
         console.log("Buzz");
      }

      else{
         console.log(i);
      }
   }

// 8.	The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
// ●	It must start with a hash symbol, #.
// ●	Ignore all spaces in the input.
// ●	All words must have their first letter capitalized.
// ●	If the final result is going to be longer than 140 characters, it should return false.
// ●	If the input or result is an empty string, it should return false






