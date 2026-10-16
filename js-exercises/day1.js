// // Day-1 exercise (Variables,Types,Operators)

// // #1 Variables Aka Identifiers {Three ways to declare a variable} :- let,var,const

// //1
// let name,age,college;
// name = "curse";
// age = 25;
// college = "IndraPrashtaUniversity";

// // console.log(`I am ${age} old guy named ${name} who is currently studying at ${college} in B.tech`)

// //2
// const CITY = "Delhi";
// // CITY = "mumbai"; // Assignment to constant variable(gives error)..It means we cannot reassign a value to a constant variable ...(But we can perform various operations on it ), which we can save into different variable , cause original cant be changed.
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
// console.log("Typeof of primitive dataTypes")
// console.log(typeof("Hello world"));
// console.log(typeof(true));
// console.log(typeof(42));
// console.log(typeof(undefined));
// console.log(typeof(0/0));  //0/0 is actually infinity or not defined but it give a data knowns as NaN=not an number ...and whats more exciting this data type is actually a *number*
// console.log("Typeof Non-primitive dataTypes")
// console.log(typeof({name:"curse"}));

// //2
// console.log(typeof(null));  // Null is actually an object in JS an old bug continuing till data.

// //3
// let number = "25";
// let num = Number(number) +5; //explicit conversion -> converting string to number

// console.log(num)

// //4
// let num1 = "5" + 3; // the (+) sign have two task in JavaScript -> 1. Addition & 2. Concatenation of two string and the priority of "Concatenation" is more than addition so it added "5" + 3 and return 53. This process is called 'Type Coercion'.

// let num2 = "5" - 3;  //Where as in JS (-,*,/,% ) have only sole task doing math so they convert string into number cause these signs cant do anything else and return an "Number"

// console.log(num1,num2);
// console.log(typeof(num1),typeof(num2));

// //5

// let num3 = 100;
// let numToString = String(num3);

// console.log(numToString)
// console.log(typeof(numToString))

// //6
// let name = "John";
// let name2 = name ;
// // name2= "curse";
// console.log(name,name2);

// //7
// let x = Number("abc");
// console.log(x)
// let value = isNaN("abc"); // this is older NaN checking version which only do comparison but to do it ..It converts the string value in Number first, Then check is this number a NaN or not, And the question (Is("abc")) is NaN? = True (result of it)

// let value2= Number.isNaN("abc") //here it dont do any conversion it checks what we written in value if its a normal number it returns = false cause normal number are not NaN , same with string it return false cause string is NaN

// let value3 = Number.isNaN(5)
// // console.log(value) //True
// // console.log(value2) //False
// // console.log(value3) //False

// //8
// // Except these 8 Falsy Values every Boolean value are Truthy :- (0,Null,Undefined,False,NaN,-0,0n,"")
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean("hi"));
// console.log(Boolean(5));

// //9
// let declaredValue;
// console.log(declaredValue); // It gives Undefined because of How JS manages memory..It do a process called hoistig which gives space in the memory to a variable exact moment it created and lock it into TDZ... then if we dont give it any value excution starts and compiler read code line one by one and when it reach "let declaredValue" and see its unintialised it give it an value (undefined)

// console.log(age) // here it throw reference error why ? cause in this we are accessing value before its declaration ... and it applies everywhere even in functions
// let age = 20;

// //10
// const ME = "Brijesh";
// let p = ME.length;  //count characters in string even "spaces"
// let q = ME.toUpperCase(); //Convert string letters into uppercase
// let r = ME.slice(0,3) // here i thought how a string can be sliced? The answer is JS temporarily converts string into a object through a wrapped and slice it and return its value after that string became string again

// console.log(p);
// console.log(q);
// console.log(r)

// //11
// //parseInt and parseFloat are functions to extract numbers from string
// let var1 = parseInt("42px");
// let var2 = parseFloat("3.14abc");

// // The parsing STRING must start with either "number" or "+,-" sign
// let fail1 = parseInt("px42"); // ❌ Returns NaN (Stops at 'p' immediately)
// let fail2 = parseFloat("abc3.14"); // ❌ Returns NaN (Stops at 'a' immediately)

// console.log(var1);
// console.log(var2);
// console.log(fail1,fail2) // NaN , NaN

// #3 :- Operators (Arithmetic,Assignment,Bitwise,Comparison,Logical,Ternary,Type,)

// 1."arithmetic operators" :- (/,*,+,-,%,**,***);
// 2."Assignment operators" :- (=,/=,*=,+=,-=);
// 3."Bitwise operators"    :- (&,|,^,~)
// 4."Comparison operators" :- (<,>,<=,>=,==,===,!==,!===);
// 5."Logical operators"    :- (&&,||,!)
// 6."Ternary operators"    :- (condition ? value_if_true : value_if_false;)
// 7."Type operators"       :- (Typeof,Instanceof)

//1
// const priceOfChai = 20;
// let cupOfChaiBuyed = 4;
// const GST = priceOfChai * cupOfChaiBuyed * ((5 * 1) / 100);
// let totalWithoutGst = priceOfChai * cupOfChaiBuyed;
// let totalWithGst = priceOfChai * cupOfChaiBuyed + GST;

// console.log(GST);
// console.log(totalWithoutGst);
// console.log(totalWithGst);
// console.log(
//   `I buyed ${cupOfChaiBuyed} cup of chai, which cost me without gst Rs.${priceOfChai * cupOfChaiBuyed} without gst and with 5% gst it costed me ${priceOfChai * cupOfChaiBuyed + GST}`,
// );

// //2
// let num;
// num = "4";
// if (num % 2 === 0) {
//   //here % converting "4" into number cause % do operation btw numbers
//   console.log("Number is even");
// } else {
//   console.log("Number is odd");
// }

// //3
// let number = 4567;
// let lastDigit = Math.floor(number % 10);
// let firstDIgit = Math.floor(number / 1000);
// console.log(lastDigit);
// console.log(firstDIgit);

// //4
// if (5 == "5") {
//   console.log("true, number is loosely equal to string if value are same");
// } else {
//   console.log("put same value");
// }

// if (5 === null) {
//   console.log("True, yeh sahi hai qt yeh");
// } else {
//   console.log("false, babu moshai equal value or data type dono hona chahiye");
// }

// //5
// let marks = 97.67;

// if (marks < 0) {
//   console.log("Enter valid marks");
// } else if (marks > 0 && marks <= 40) {
//   console.log("Your Grade is D");
// } else if (marks >= 40 && marks < 60) {
//   console.log("Your Grade is C");
// } else if (marks > 60 && marks <= 70) {
//   console.log("Your Grade is B");
// } else if (marks > 70 && marks <= 80) {
//   console.log("Your Grade is A");
// } else {
//   console.log("Your Grade is A+");
// }

// //6
// let age = 18;
// let hasId = true;
// if (age >= 18 && hasId) {
//   console.log("True , You are eligible voter");
// } else {
//   console.log("false,You are not eligible");
// }

// //7
// let todayDay = "Sunday";

// if(todayDay == "Sunday" || todayDay == "Saturday"){
//     console.log("Today is weekend")
// }else{
//     console.log("Today is working day")
// }

// //8
// let weekend = true;

// if(weekend != true){
//     console.log("go to work babe")
// }else{
//     console.log("It's Holiday")
// }

// let myAge = true;
// let yourAge = !myAge;

// console.log("your age for vote is",yourAge);
// console.log("my age for vote is" , myAge);

// //9
// let counter = 0;
// for(i=0;i<=5;i++){
//     console.log("Your current itertion is " , i+1)

//     counter++;
//     console.log(`Your counter++ operator value is ${counter}`);

//     counter--;
//     console.log(`Your counter-- operator value is ${counter}`);

//     counter += 1;
//     console.log(`Your counter+= operator value is ${counter}`);

// }

// //10
// let myMarks = 70;
// let Marks = myMarks >= 40 ? "Pass" : "Fail"

// dating = true ? "Wow" : "Nub"
// console.log(dating)
// console.log(Marks)