// normal code for calculating sum of array

let arr = [1,4,2,5,6,7]

function findsum(arr){
    sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum =sum + arr[index];
    }
    return sum;
}

console.log(findsum(arr));

// Reducer 

let output = arr.reduce(function(acc,curr){
    acc = acc + curr
    return acc
},0)

console.log(output)
// =======================================

let array=[3,4,45,2,43,2,42,32]

function findsum(array){
    sum=0;
    for(let i=0; i<array.length; i++){
        sum = sum + array[i];
    }
    return sum
}

console.log(findsum(array))
// ======================

// reduce

const result= array.reduce(function (acc,curr){
    acc = acc + curr
    return acc
},0);

console.log(result)

// find max value of array

function maximum(array){
    max=0;
    for(let i=0; i<array.length; i++){
        if (array[i] > max){
            max = array[i]
        }
    }
    return max
}

console.log(maximum(array))

// Reduce

let final_result = array.reduce(function (max,curr){
    if(curr > max){
        max = curr;
    }
    return max
},0)

console.log(final_result)
// ===================================================
const users = [
    {firstname:'nanda',lastname:'kumar',age:5},
    {firstname:'naan',lastname:'teup',age:52},
    {firstname:'trump',lastname:'kumari',age:52},
    {firstname:'trumoim',lastname:'kaal',age:45}
]

const reduce = users.reduce(function(acc, curr){
    if(curr.age < 30){
        acc.push(curr.firstname);  //if age of current user is < 30, push there firstName into the acc array
    }
    return acc;
}, [ ]);  //initially, the acc will be an empty array

console.log(reduce)