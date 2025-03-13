const userEmail = []
if (userEmail) {
    console.log('gott');

} else {
    console.log('dont');

}

// falsy value
// false, 0,-0,bigInt 0n , "",null, undufinde,NaN


// truthy value
// true ,'0'," ",[],{},function(){}


if (userEmail.length === 0) {
    console.log('emty');

}

const emtyobj = {}
if (Object.keys(emtyobj)) {

}

// nullish coalescing operator(??)

let val1
val1 = 5 ?? 10
console.log(val1);
console.log(val1);



// terniary operator

// condition ? true : false
const Name = 4
Name ===4 ? console.log('congratulay') : console.log("sorry");
;
