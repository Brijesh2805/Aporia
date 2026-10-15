// // Day-1 exercise (Variables,Types,Operators)

// // #Variables Aka Identifiers {Three ways to declare a variable} :- let,var,const

// //1
// let name,age,college;
// name = "curse";
// age = 25;
// college = "IndraPrashtaUniversity";

// // console.log(`I am ${age} old guy named ${name} who is currently studying at ${college} in B.tech`)

// //2 
// const CITY = "Delhi";
// // CITY = "mumbai"; // Assignment to constant variable(gives error)..It means we cannot reassign a value to a constant variable
// console.log(CITY);  

// //3
// let marks = 70;
// console.log(marks);
// marks = 80;
// console.log(marks);

// //4
// let a,b,c;
// a = 1;
// b = 2;

// c = a;
// a = b;
// b = c;

// // will print (2,1)
// console.log(a,b) 

// //5

// let x,y;
// x = 1;
// y = 2;
//  console.log(x,y);
// x = x+y; //(x= 1+2=3);
// y = x-y;//(y= 3-2=1 ->x)
// x = x-y //(x=3-1=2->y)

// console.log(x,y);

// //6
// let sub1,sub2,sub3;
// sub1 = "Maths";
// sub2 = "Physics";
// sub3 = "Chemistry";

// console.log(`I love ${sub2} but i hate ${sub1} but i dont know why this ${sub3} is even here.`);

// //7
// let PriceOfSamosa, Samosa;
// PriceOfSamosa= 20;
// Samosa = 5;
//  console.log(`One samosa cost Rs.${PriceOfSamosa} and i bought ${Samosa} , So i spend Rs${PriceOfSamosa * 5 }. `)

// //8

// let shape = "circle" ; //It have only its block scope and can be reassigned its value
// var price = 100; // It have global scope and its value can also be reassigned
// const PIE = 3.14 ; // It have block scope and its value cannot be reassigned

// console.log(shape,price,PIE)

// //9
// // message = "Hello world"
// // let message;
// // console.log(message);  // gave error :-  Cannot access 'message' before initialization

// greet = "hello bro"; // oh interesting this message runs even without any variable keyword ..why? because greet became windows variable so it exist
// var greet; // it also run with var even before decalaring var 
// console.log(greet)

// //10
// let collegeName = "DTC";
// let rollNumber = 105;
// let studentName = "Curse";
// let studentCourse = "B.Tech";
// let totalYearOfCourse = 4;

// console.log(collegeName,studentName,rollNumber,studentCourse,totalYearOfCourse);


// #2:- Data types 1.{Primitive -> They are "immutable" means their original value cant be changed value of their copies can changed}, 2.{Non-Primitive-> They are "mutable" means their original value can be changed through call by reference}

// Primitive DataTypes :- String,boolean,number,undefined,null
// Non-Primitive Datatypes :- object,Array,function etc

//1
console.log("Typeof of primitive dataTypes")
console.log(typeof("Hello world"));
console.log(typeof(true));
console.log(typeof(42));
console.log(typeof(undefined));
console.log(typeof(0/0));  //0/0 is actually infinity or not defined but it give a data knowns as NaN=not an number ...and whats more exciting this data type is actually a *number*
console.log("Typeof Non-primitive dataTypes")
console.log(typeof({name:"curse"}));

//2
console.log(typeof(null));  // Null is actually an object in JS an old bug continuing till data.

//3
let number = "25";
let num = Number(number) +5; //explicit conversion -> converting string to number

console.log(num)

//4
let num1 = "5" + 3; // the (+) sign have two task in JavaScript -> 1. Addition & 2. Concatenation of two string and the priority of "Concatenation" is more than addition so it added "5" + 3 and return 53. This process is called 'Type Coercion'.

let num2 = "5" - 3;  //Where as in JS (-,*,/,% ) have only sole task doing math so they convert string into number cause these signs cant do anything else and return an "Number"

console.log(num1,num2);
console.log(typeof(num1),typeof(num2));

//5

let num3 = 100;
let numToString = String(num3);

console.log(numToString)
console.log(typeof(numToString))

//6 
let name = "John";
let name2 = name ;
// name2= "curse";
console.log(name,name2);
