
let num = [1,2,3,4,33,7,9];

function odd(x){
    return x % 2!==0;
}

const output = num.filter(odd)

console.log(output)
// ===========or==================
let ames = num.filter((x) => x %2!==0)

console.log(ames)
// <<<<<<<<<<<<<========or=====>>>>>

let result=num.filter(function odd(x){
    return x.toString(2);
})
console.log(result)
// ===============================

setTimeout(function(){
    console.log('nanda')
},2000)
// <<<<<<=========================>>>>>>>

let values = [1,2,3,4,4,5,5,2]

let final_result = values.filter(function (even){
    return even % 2 == 0;
})
console.log(final_result)
// ===========================================

let numbers = [14,345,46,4,34]

function res(even){
    return  even % 2 == 0;
}

const final_output = numbers.filter(res)
console.log(final_output)
// ========================
const users = [
    {firstname:'nanda',lastname:'kumar',age:5},
    {firstname:'naan',lastname:'teup',age:52},
    {firstname:'trump',lastname:'kumari',age:52},
    {firstname:'trumoim',lastname:'kaal',age:45}
]

let final_outpu = users.filter((x) => x.age < 20).map((x) => x.firstname);

console.log(final_outpu)
// ==============================

let user = users.filter((x) => x.age < 30)

console.log(user)