// /for loop

// for (let i = 1; i <= 10; i++) {
//     const element = i
//     if (element == 5) {
//         console.log("this is best 5 ");
//     }
//     // console.log(element);
//     for (let i = 1; i <= 10.; i++) {
//         console.log(`table of  ${i}`);
//         for (let j = 1; j <= 10; j++) {
//             // console.log(`ineer loop${j} Iuterloop${i}`);
//             console.log(i + '*' + j + "=" + i*j );

//         }
//     }
// }

// let myarr = ['udit','mistry','aditya','jay' ,"bhiem"]
// console.log(myarr.length);

// for(let i = 0; i<myarr.length; i++){
//     const element = myarr[i]
//     console.log(element)
// }


//break nd contineu


// for (let index = 1; index <=20; index++) {
//   if (index==5) {
//     console.log(`the number is 5 bye`);
//     breaks
//   }
//     console.log(`value of i is ${index}`);
// }


//contineu
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`the number is 5 bye`);
        continue
    }
    
    if (index == 6) {
        console.log(`the number is 6 byeeeee bye`);
        break
    }
    console.log(`value of i is ${index}`);
}