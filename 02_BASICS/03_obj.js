console.log("udit");
// singleton

// object litrrals

const mySym = Symbol("key1")

const jsUser = {
    name: 'Hitesh',
    [mySym] : 'ok',
    "full name" : 'mistryudit',
    age: 18,
    location:'jaypur',
    email:'udit@gmail.com',
    isLoggedIn:false,
    lastLoginDays:['monday','sunday']

}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


// jsUser.email = 'bhi@gmail.com'
// Object.freeze(jsUser)
// jsUser.email = 'bhihhsh@gmail.com'
// console.log(jsUser);


jsUser.greeting = function () {
    console.log("udit");
}

jsUser.greetingtwo = function () {
    console.log(`my name is ,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());