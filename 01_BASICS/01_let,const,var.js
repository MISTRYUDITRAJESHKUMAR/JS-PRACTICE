// // console.log('udit');
// const Name = 'uddit';
// // let nameid = 1245654




// // const name = 'uddit';    this case const cant repeat varaible and 
// // value

// var email = "uditmistry@gmail.com"
// email = "uditt"

// console.log(email);
// //this case will var can change a value of the varaible
// // after change value of varaible

// let udit = "12"
// udit = "15"
// console.log(udit);


// //in this case we will change value 
// city = "gandhinagar"
// city = "abu"
// console.log(city);

// // prefer not use var

// // qestions

// // 1) ans 
// Basic Declaration and Initialization:

// Declare a variable using let and assign it a value.
// Declare a variable using const and assign it a value.
// Declare a variable using var and assign it a value.

// let Naame = "udit"
// const id = 1543
// var uditmistry = "om"

// console.log(Naame);
// console.log(id);
// console.log(uditmistry);



// // 2)

// Scope Differences:

// Create a function and declare a variable inside it using var.Try to access the variable outside the function.
// Create a block(e.g., an if statement) and declare a variable inside it using let.Try to access the variable outside the block.
// Create a block and declare a variable inside it using const.Try to access the variable outside the block.
// if(true){
//     let q3 = "udit"
//     const ans = '12' 
//     console.log(q3);
//     console.log(ans);
// }

// function varScoped() {
//     var Scoped = "I am var scoped";
//     console.log(Scoped);
// }
//  varScoped()




// //3)

// Reassignment:







// //3)
// Declare a variable using let and reassign it a new value.
// Declare a variable using const and try to reassign it a new value. Observe what happens.
// Declare a variable using var and reassign it a new value.

// let udit = "male"
// udit = "notFemale"
// console.log(udit);


// const mame = 'udit'
// // mame = 'adit'


// var car = 'Audio'
// car = "bmw"
// console.log(car);



// 4)
// Hoisting:

// Declare a variable using var after trying to access it. Observe the behavior.
// Declare a variable using let after trying to access it. Observe the behavior.
// Declare a variable using const after trying to access it.


// console.log(udit);
// var udit = 'boy' 

// console.log(uditt);
// let uditt = 'boy' 



// console.log(uditt);
// const uditt = 'boy' 




// 5)
// Temporal Dead Zone (TDZ):

// Write a code snippet that demonstrates the Temporal Dead Zone for let.
// Write a code snippet that demonstrates the Temporal Dead Zone for const.


// {
//     console.log(udit);
//     let udit = "mistry"

//     console.log(uddit);
//     const uddit = "missytu"
// }\


// 6)
// Write a code snippet that shows how let and const are block-scoped.
// Write a code snippet that shows how var is not block-scoped.

// {
//     let udit = "man"
//     var misr = "ma"
//     const udiddu = "manaa"
// }
// // console.log(udit);
// console.log(misr);
// // console.log(udiddu);



// 7)
// Const with Objects and Arrays:

// Declare a const object and try to change one of its properties.
// Declare a const array and try to change one of its elements.

// const obj = {
//     udit:'boy',
// }
// obj.udit = "son"
// console.log(obj.udit);


// const array = [1,2] 
// array[0] = 4
// console.log(array);

// 8)
// Shadowing:

// Question: Write a code snippet that demonstrates variable shadowing with let


// let nameu = "outer"
// {
//     let nameu = "inner"
//     console.log(nameu);
// }
// console.log(nameu);


// var a = 1;
// {
//     var a = 2;
//     console.log(a);
// }
// console.log(a);


// const b = 4;
// {
//     const b = 3;
//     console.log(b);
// }
// console.log(b);





// 9)
// Global Object:

// Question: Declare a variable using var in the global scope and check if it becomes a property of the global object.

// Answer:

// var global = "udit"
// console.log(window.global);

// let udit = "mistry"
// console.log(window.udit);




// 10)
// Question: Write a code snippet that demonstrates the difference in behavior of var and let in a for loop.
// Answer:


// for (let i = 0; i < 4; i++) {
//    console.log(i);
// }

// for (var i = 0; i < 4; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 3000);
// }


// 11)
// function test() {
//     const x = 1;
//     if (true) {
//         const x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }
// test()


// const myobj = {
//     Name: {
//         fname: "mistry",
//         mname: "udit",
//         lname: "raeshkumar"
//     }
// }
// myobj.Name.lname = "rajeshkumar"
// console.log(myobj.Name.lname);

// // myobj.Name.toString()
// console.log(myobj);


// 12)
// const arr = [[1,3],[3,3]]
// arr[1][1] = 2
// console.log(arr[0][0]);
