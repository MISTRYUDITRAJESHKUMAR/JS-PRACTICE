// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = '123abc'
tinderUser.name = 'udit'
tinderUser.isLoggedIn = false
// console.log(tinderUser);


// const regulerus = {
//     email: 'udud@gmail',
//     fullname: {
//         userFullname: {
//             fName: "udit",
//             lName: "mistry"
//         }
//     }
// }
// console.log(regulerus.fullname.userFullname.fName);
const obj1 = {
    1: 'a',
    2: 'b',
}
const obj2 = {
    3: 'c',
    4: 'd',
}
const obj4 = {
    5: 'e',
    6: 'f'
}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1,...obj2}
// console.log(obj3);


const users = [
    {
        id : 1,
        Email:'udit@gmail'
    },
    {
        id : 1,
        Email:'udit@gmail'
    },
]

users[1].Email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('name'));



