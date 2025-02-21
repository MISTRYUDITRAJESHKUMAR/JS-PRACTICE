//prremittivve 

// 7)
// string
// number
// bollean
// null
// undifined
// symbol
// big int



// const a = 1
// const b = 18.77

// const isin = false
// const temp = null
// let userEmail;

// const id = Symbol('123')
// const anotther = Symbol('123')

// console.log(id === anotther);



// const bigN = 66267267726n
// refrence(non premittive)            

// obj
// array
//funcion



// const heros = ['udit','mistry']

// let udit = {
//     name:'udit',
//     id :'12'
// }

// const uditt = function () {
//     console.log("udit");
// }
// uditt()
// console.log(typeof function);






// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(premitive),heap(non premitive)


let myName = "udit"

let newname = myName
newname = "uditmistry"

console.log(myName);
console.log(newname);



let user = {
    email:"udit@",
    upi:"udigsa"
}


let user2 = user

user2.email = "nana"
console.log(user.email);
console.log(user2.email);
