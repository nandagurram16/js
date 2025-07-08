// 1.To String()
let bikes = ['ct100','bajaj','xreme','hero']
console.log(bikes.toString())                        
// .join()
console.log(bikes.join())
console.log(bikes.join(''))
console.log(bikes.join('-'))
console.log(bikes.join('='))
console.log(bikes.join(','))
console.log(bikes.join('2*2'))
// .pop()
console.log(bikes.pop())
console.log(bikes)
// .push()
console.log(bikes.push('hero,tvs'))
console.log(bikes)
// .shift
console.log(bikes.shift())
console.log(bikes)
// .unshift()
console.log(bikes.unshift('bmw','kawasaki'))
console.log(bikes)
// delete
delete bikes[4]
console.log(bikes)
// concat()
let arr1 =[1,2,3,]
let arr2 = [3,2,1,4]
let arr3 = [0,9,8]
let arr4 = ['aju','raju']
console.log(arr1.join('-'),arr2.join('*'),arr3.join('+'),arr4.join('='))
let new_arr = arr1.concat(arr2,arr3,arr4)
console.log(new_arr)
// sort()
let srt = [8,6,4,3,"y",9]
srt.sort()
console.log(srt)
// splice()
// splice(start, deleteCount, item1, item2, ...)
// start = 2: Start at index 2 (element 23)
// deleteCount = 3: Remove 3 elements → 23, 43, 53
// Add: 'a', 'b', 'c' at that position
let array = [99,32,23,43,53,100]
array.splice(2,3,'a','b','c')
console.log(array)
let splice = [20,30,40,50,34]
splice.splice(1,3)
console.log(splice)
// slice()
// slice(start,end)
let num = [20,30,40,50,60]
let num2 = num.slice(1,4)
console.log(num2)
// reverse()
let num1 = [1,2,3,4,5,6]
num1.reverse()
console.log(num1)
// is Array()
let isArray = 'nanda'
console.log(Array.isArray(num1))
console.log(Array.isArray(isArray))
// indexof()
let elements = ['lap','top','head','set','tooop']
console.log(elements.indexOf(2,3))
// find()
let find = [30,40,50,58]
console.log(find.find((number) => number < 500))
// findIndex()
let islargernumber = (element) => element >13
console.log(find.findIndex(islargernumber))
// .includes()
console.log(find.includes(4))
console.log(bikes.includes('bmw'))
// entries()
let days = ['sun','mon','fri']

let day = days.entries()
for ( let x of day){
    console.log(x  + '\n')
}
console.log(day)
// every()
let values = [19,4,5,6,6,7,20]
let value = (value) => value < 21
console.log(values.every(value))
// some()

function ages(adult){
    if (adult >= 18){
        console.log('adult age')
    }
    else{
        console.log('not adult')
    }
}
ages(20)
// Fill()

let fruits = ['apple','babana','orange','ear']
console.log(fruits.fill('kiwi',3))
// from()
console.log(Array.from(' '))
