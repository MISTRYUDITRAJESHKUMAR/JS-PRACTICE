// const student_name = ['  udit', ' mistry', '  rajeshkumar']
// let a  = student_name.length

// for (let i = 0; i < a; i++) {
//   console.log(student_name[i]);
// }

// const a = ['udit']
// console.log(a.toString());
// console.log(typeof a[0]);

// const obj = {
//     name:'udit',
//     num :1
// }
// console.log(obj.name);
// console.log(typeof obj);


// const udit = ['jan','fab','march','april']
// const adding = udit.splice(0, 1,'udit')
// udit[0] = "hello"
// console.log(udit.toString());

// const Name = ["udit", 'rajeshkumar','mistry','NAYAK?']
// // Name[Name.length] = 'mistry';
// // Name[Name.length] = 'NAYAK?';
// const spliced = Name.toSpliced(2,2)
// console.log(Name)

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);
// console.log(months);


// const udit = ["name","sir","saheb","maeb","anab"]
// const slicce = udit.slice(2,4)
// console.log(slicce);


// const car = ['odi', 'a', 'z', 'bmw', 'sss', 'bmbffw']
// // console.log(car.sort());
// // console.log(car.reverse())
// console.log(car.toSorted());


// const num = [1,200, 2, 10, 100, 15];
// console.log(num.toSorted());
// console.log(num.sort());

function PersonAdd(fname, mname, lname){
    this.firstName = fname
    this.middName = mname
    this.lastName = lname
}
const emone = new PersonAdd ('udit', 'mistry', 'rajeshkumar')
const emotne = new PersonAdd ('mistry', 'jayshreeben', 'rajeshkumar')
console.log(emotne);

