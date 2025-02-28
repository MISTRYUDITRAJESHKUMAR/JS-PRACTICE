


// function saymyName() {
//     console.log("u");
//     console.log("d");
//     console.log("i");
//     console.log("t");
// }
// saymyName();

// function addTwoNumbers(a, b) {
//     console.log(a + b)
// }
// const res = addTwoNumbers(1, 4)
// console.log("result",res);


function addTwoNumbers(a, b) {
    // let res = a + b
    // return res

    return a + b
}
const res = addTwoNumbers(1, 4)
// console.log("result is:",res);


// function loginUserMessage(username = "udit") {
//     if (username === undefined) {
//         console.log("plese enter username");
//         return
//     }
//     return `${username}  just logged in`
// }

// // console.log(loginUserMessage("udit"));
// console.log(loginUserMessage('udit'));



function calclulatecart(val1, val2, ...num1) {
    return num1

}
// console.log(calclulatecart(158, 665, 252, 5, 588));

const user = {
    userName: "udit",
    ages: 21
}

function handleObject(anyobject) {
    console.log(`user name is ${anyobject.userName} and price is ${anyobject.age} `);
}
// handleObject(user)
handleObject({
    userName: 'aditya',
    age: '99'
})


const myNewArray = ['udit','mistry','rajeshkumar']

function returnarr (getArr){
    return getArr[getArr.length - 1]
}
// console.log(returnarr(myNewArray));
console.log(returnarr([100,200]));
