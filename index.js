
//Question 1: Create a function that will be able to convert figures from Fahrenheit to Celsius.

let fahToCel = (F) => {
   return (F-32)*(5/9);
}
//Question 1: Test Cases
// console.log(fahToCel(50) + "ͦ  Celsius"); //10ͦ Celsius
// console.log(fahToCel(122) + "ͦ  Celsius"); //50ͦ Celsius


//Question 2: Create a function that will calculate the average of numbers in an array.

let calcAverage = (digits) => {
   let calcSum = 0;
   for(let y = 0; y < digits.length; y++){
      calcSum = calcSum + digits[y];
   }
   return calcSum / digits.length;
}

// Question 2: Test Cases
// console.log(calcAverage([2, 3, 5, 6, 9])); //5
// console.log(calcAverage([5, 8, 10, 15, 20])); //11.6


// Question 3: Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

let isDivisible = (n, x, y) =>{
   if (n % x === 0 && n % y === 0){
           return true;
        }else {
           return false;
        }  
}

// Question 3: Test Cases
// console.log(isDivisible(20, 4, 5)); // True
// console.log(isDivisible(50, 4, 7)); // False


// Question 4: Create a function that will output the first 100 prime numbers.

let primeNum = () => {
   let nums = [];

   for(let b = 2; b <= 100; b++){
      let isPrime = true;
      for(let a = 2;  a <= Math.sqrt(b); a++){
         if (b % a === 0) {
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

// Question 4: Test Cases
// console.log(primeNum(100));


// Question 5:	Create a function that will return a boolean specifying if a number is a prime number.

let isPrime = (number) => {
   if (number < 2){
      return false;
   }
   for(let c = 2; c <= Math.sqrt(number); c++){
      if (number % c === 0) {
         return false
      } else {
         return true;
      }
   }
}
// Question 5: Test Cases
// console.log(isPrime(17)); //true
// console.log(isPrime(30)); //false


//Question 6: Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

let getPosNumbers = (numbers) => {
   let posNumbers = numbers.filter((number) => number > 0);
   console.log(posNumbers);
}
// Question 6: Test Case
// const numbers = [2, 4, -5, -7, 8, -20]; //[2, 4, 8]
// getPosNumbers(numbers);


//Question 7: 	Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".


   for(let i = 1; i <= 100; i++){
      if(i % 3 === 0 && i % 5 === 0){
         console.log("Fizz Buzz");

      }else if(i % 3 === 0){
         console.log("Fizz");

      }else if(i % 5 === 0){
         console.log("Buzz");
      }

      else{
         console.log(i);
      }
   }


// Question 8:	The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
// ●	It must start with a hash symbol, #.
// ●	Ignore all spaces in the input.
// ●	All words must have their first letter capitalized.
// ●	If the final result is going to be longer than 140 characters, it should return false.
// ●	If the input or result is an empty string, it should return false

function generateHashtag(inp) {
   if(!inp || inp.trim() === ""){
      return false;
   }
   const words = inp.split (" ");
   
   const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
   const hashtag = "#" + capitalizedWords.join(" ");

   if (hashtag > 140){
      return false;
   }
   console.log(hashtag);
}
const inp = "hello my dear people of God, its been a while. Hope you all are doing well?";
generateHashtag(inp);

// Question 8: TestCase:
// #Hello My Dear People Of God, Its Been A While. Hope You All  Are Doing Well?