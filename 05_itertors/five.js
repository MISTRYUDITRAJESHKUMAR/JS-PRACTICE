// const coding = ['js', 'c', 'c++', 'javaa']

// coding.forEach(function (item) {
//     console.log(item);
// })


const coding = ['js', 'c', 'c++', 'javaa']

// coding.forEach((repeat) => {
//     console.log(repeat);

// })


function printMe(item) {
    // console.log(item);
}
coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);

// })

const mycoding = [
    {
        langname: 'js',
        langfile: '.js'
    },
    {
        langname: 'py',
        lfile: '.py'
    },
    {
        langname: 'c',
        lfile: '.c'
    }

]

mycoding.forEach((names)=>{
    console.log(names.langname);
    
})