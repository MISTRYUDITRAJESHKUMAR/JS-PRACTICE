// var  c = 300
// let a = 300

// if (true) {
//     let a = 10
//     const b = 20;
//     console.log("INNER :", a);

// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

// }





// console.log(a); // 
// console.log(b); // 10 20 30
// console.log(c); // 10 20 30


function one() {
    const username = 'udit'
    function two() {
        const website = 'youtube'
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = 'udit'
    if (username === "udit") {
        const web = "youtube"
        // console.log(username + web);

    }
    // console.log(web);
}
// console.log(username);

// ++++intresting++++


console.log(addone(1));
addone(1)
function addone(number) {
    return number + 1
}

addtwo(9)
const addtwo = function (number) {
    return number + 2
}