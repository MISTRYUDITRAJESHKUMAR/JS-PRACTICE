


function saymyName() {
    console.log("u");
    console.log("d");
    console.log("i");
    console.log("t");
}
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


function loginUserMessage(username = "udit") {
    if (username === undefined) {
        console.log("plese enter username");
        return
    }
    return `${username}  just logged in`
}

// console.log(loginUserMessage("udit"));
console.log(loginUserMessage());



