// Functions and Loops

// #1:- Functions
// let userResponse;
// do{
//     userResponse = prompt("Please type 'Yes' to continue")
// }while(userResponse!=='Yes'){
//    console.log("You typed yes . Thank you")
// }

//1
// function greet(name) {
//   console.log("Hello", name);
//   return `Hello ${name}`;
// }

// let user = "Brijesh";
// console.log(greet(user));

// function add(a, b) {
//   const SUM = a + b;
//   return SUM;
// }

// let a, b;
// a = 4;
// b = 9;

// console.log(add(a, b)); // 13
// console.log(add(9, 15)); // 24

// //3
// function isEven(n) {
//   //     if(n%2==0){                    // my approach wrong
//   //         return (`${n} is even`)
//   //     }else{
//   //         return (`${n} is odd`)
//   //     }
//   return n % 2 === 0; // only single line of code was needed
// }

// let num = 3;
// console.log(isEven(num));

// //4
// function max(a, b) {
//   return a > b ? a : b; // Taken help of ai
// }

// console.log(max(9, 7));

// //5
// function greet2(name = "guest") {
//   return `Welcome ${name}`;
// }

// console.log(greet2());
// console.log(greet2("Curse"));

// //6
// const square = (n) => {
//   return n ** 2;
//   // console.log(n**n);  //This statement became un reachable because in function after return statement JS stop the excution of code of that function block
// };

// console.log(square(5));

// //7
// const areaOfRectangle = (length, width) => {
//   return length * width;
// };

// let l = 10;
// let w = 20;

// console.log(areaOfRectangle(l, w));
// console.log(areaOfRectangle(2, 3));

// //8
// const celToFahren = (celsius) => {
//   let faranheit = celsius * 1.8 + 32;
//   return faranheit;
// };
// let degree = 100;
// console.log(celToFahren(1));
// console.log(celToFahren(degree));

// //9
// function grade(marks) {
//   if (marks >= 0 && marks <= 40) {
//     return "fail";
//   } else if (marks > 40 && marks <= 60) {
//     return "C";
//   } else if (marks > 6 && marks <= 80) {
//     return "B";
//   } else marks > 80 && marks <= 100;
//   return "A";
// }

// let studentMarks = 70 ;
// let studentGrade = grade(studentMarks);

// console.log(studentGrade)

// //10
// function gst(price){
//     return price * (18/100)
// }
// function totalWithGST(price){
//     return price + gst(price)          //Here totalWithGST calling 2nd function gst(price)
// }

// let penPrice = 10;

// console.log(totalWithGST(penPrice))

// #2:- Loops (for,while,do-while)

//Here we do 10 same question with different loops

// 1:- for loop

//1
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }

// //2
// for (i = 1; i <= 25; i++) {
//   console.log(2 * i);
// }

// //3
// let sum = 0;
// for (i = 1; i <= 100; i++) {
//   sum = sum + i;
//   // console.log(sum)   // give output for every i
// }

// console.log(sum); // give only final output

// //4
// let numberOfTable = 7;

// for (i = 1; i <= 10; i++) {
//   let table = `7 multiplied by ${i} = ${numberOfTable * i}`;
//   console.log(table);
// }

// //5
// let n = 10;
// let factorialOfNumber = 1;

// for (i = 1; i <= n; i++) {
//   factorialOfNumber = factorialOfNumber * i;
// }

// console.log(factorialOfNumber);

// //6
// // let name = "curse"        //wrong solution
// // let name2;
// // for(i=1;i<=5 && i >=0;i--){
// //   name2= name.slice(4,i)
// // }
// // console.log(name2)

// function reversedString(str) {
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed = reversed + str[i];
//   }
//   return reversed;
// }

// console.log(reversedString("curse"));

// //7

// function vowelCount(string) {
//   let count = 0;
//   let vowels = "aiouAEIOU"; //created string of targeted vowels

//   for (i = 0; i <= string.length - 1; i++) {
//     //Method 1
//     if (
//       string[i] === "a" ||
//       string[i] === "e" ||
//       string[i] === "i" ||
//       string[i] === "o" ||
//       string[i] === "u"
//     ) {
//       count += 1;
//     }
//     //   //method 2 using .includes()

//     if (vowels.includes(string[i])) {
//       //Iska matlab hai kya vowels me string[i] ki value present hai if yes it return true if not it return false .
//       console.log("founded vowel", i);
//     }
//   }
//   return count;
// }

// console.log(vowelCount("brijesh")); // 2 vowels are founded

// //8
// function starTriangle(numberOfStarRow) {
//   let stars = "";
//   for (i = 1; i <= numberOfStarRow; i++) {
//     stars = stars + "*";
//     console.log(stars);
//   }
// }
// console.log(starTriangle(5));

// // //9
// // let arr = [1,2,3,4,5]

// // function largestNoInArray(array){                      //my code was wrong
// //   let i = 0 ;
// //   let largestNumber = array[0];

// //   for(i;i<= array.length -1;i++){
// //     if(array[i] > largestNumber){
// //      largestNumberNumber = largestNumber + array[i+1]
// //     }
// //   return largestNumber
// // }
// // }

// // console.log(largestNoInArray(arr))

// //10

// function fizzbuzz(n) {
//   // for(i=1;i<=n;i++){          //My approach
//   //    let number = i;
//   //   if(number%3===0){
//   //     number = number +1;
//   //     console.log("Fizz")
//   //   }else if (number%5 === 0){
//   //     number = number + 1;
//   //     console.log("Buzz")
//   //   }else if(number % 3 === 0 && number % 5 ===0){
//   //     number = number + 1;
//   //     console.log("FizzBuzz")
//   //   }else{
//   //     console.log(i)
//   //   }
//   //   }

//   for (i = 1; i <= n; i++) {                    //Better approach with AI
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz"); 
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// (fizzbuzz(30));
