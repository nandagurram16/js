
let num = [1,2,3,4,33,7,9];

function odd(x){
    return x % 2!==0;
}

const output = num.filter(odd)

console.log(output)
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