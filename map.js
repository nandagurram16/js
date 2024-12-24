
const arr=[1,3,5,34,5]

function double(x){
    return x * 2
}
const output=arr.map(double)

console.log(output)
// <<<<<============or================>>>>>

const final_output = arr.map(function double(x){
    return x * 2
})

console.log(final_output)
// ===============>>>>>>>>>>>>>>>

const num=[2,34,35,465,6]

function tripled(x){
    return x * 3
}
const triple=num.map(tripled)

console.log(triple)
// <<<<<============or================>>>>>

const three = num.map(function triple(x){
    return x * 3
})

console.log(three)

// =========================>>>>

let val=[1,2,3,4,5,6]

function binary(x){
    return x.toString(2)
}
let result=val.map(binary)

console.log(result)
//<<<<=============(or)============>>>

let value = [1,2,3,4,5,6]

const resalt = value.map(function binary(x){
    return x.toString(2)
})

console.log(resalt)
// ===============>>>>>>>>>>>>>>>

let numbers=[1,3,45,6,4,3,4]

const outpt=numbers.map((x) => x * 2);

console.log(outpt)