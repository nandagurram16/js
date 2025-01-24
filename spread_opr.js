

set1 = [1,2,3,4,5]

set2 = [,6,7,8,9,10]

console.log(...set1 + set2)

// ex1 in object

obj1 = {
    name:'nanda',
    eamil:'@gmail.com'
}

obj2 = {
    ...obj1,
    age:25
}

console.log(obj2)

// array  remove methods
let array = [1,2,3,4]
// let index=array.indexOf(1)
//array.splice(startindex, deletecount)
array.splice(1,2)
console.log(array)

// ex:1
let fruites = ['apple','banana','orange','grapes','pappaya','pinapple']
// let index=array.indexOf(5)
fruites.splice(5,1)
console.log(fruites)

// object remove method

let obj ={
    ename:'anda',
    age:'55'
}
delete obj.ename
console.log(obj)
