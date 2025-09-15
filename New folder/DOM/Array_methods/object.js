// check if an object is empty or not?
function isEmpty(obj){
    return Object.keys(obj).length <= 1;
}
console.log(isEmpty('jjg'))

// Merge to objects
function merge(obj1,obj2){
    return{...obj1,...obj2}
}
console.log(merge({a:1,b:2},{b:5,c:8}))

// spread operator
let ob1 = "{a:1,b:2}"
let ob2 = "{b:1,c:8}"
console.log(...ob1,...ob2)

// clone an object (shallow copy)
function cloneObject(clone){
    return {...clone}
}
const original = {a:1,b:4}
const copy = cloneObject(original)
console.log(copy)
console.log(copy === original)

// ex of shallow copy
let shallowCopy = {
    name:'Nanda',
    address:{
        city:'hyderabad'
    }
}
const shallowcopy = {...shallowCopy}
// console.log(shallowcopy)
shallowcopy.name='kumar'
shallowcopy.address.city = 'kerala'
console.log(shallowCopy.name)
console.log(shallowCopy.address.city)

// deep copy

const deepcopy = {
    name:'nanda',
    address:{
        place:'chennai'
    }
}
const DeepCopy = JSON.parse(JSON.stringify(deepcopy))
DeepCopy.name ='Kumar'
DeepCopy.address.place = 'oaavdg'
console.log(deepcopy.name)
console.log(deepcopy.address.place)

// count properties of object

function countobject(count){
    return Object.keys(count).length;
}
console.log(countobject({a:1,b:3,c:6}))

// get keys and values as separtedly

const values = {
    name:'nanda',
    place:'kadiri',
    age:35
}

const keys = Object.keys(values)
const Vaues = Object.values(values)
console.log(values)
console.log(keys)
console.log(Vaues)

// converting object to array
function convert(con){
    return Object.entries(con)
}

console.log(convert({a:1,b:3,c:4}))

// clouser
function outer(){
    let count = 0
    return function inner(){
         count++
         console.log(count)
    }
}
let counter = outer()
counter()
counter()
counter()

// map function()

let arr = [1,3,3,4,5,9]

const output = arr.map((function(doubled){
    return doubled * 2
}))
console.log(output)

// another way using map

const result = arr.map((x => x*2))
console.log(result)

// reduce()
const reducer = arr.reduce((acc,curr) => acc + curr,0)
console.log(reducer)

// filter odd numbers
const filterd = arr.filter((x => x % 2))
console.log(filterd)
// filter even numbers
const even = arr.filter(y => y % 2 == 0 ).map(x => x * 3)
console.log(even)

// map using objects
const students = [
  { id: 1, name: "Nanda", marks: 85 },
  { id: 2, name: "Kumar", marks: 92 },
  { id: 3, name: "gurram", marks: 78 }
];

const name = students.map((student => student.name))
console.log(name)

// ipdated marks of student
const updated = students.map(student  => {
    return{
        ...student,
        marks:student.marks+5,
         
    }
})
console.log(updated)
// update name nanda to nandu

const updateName = students.map(student =>
    student.name === 'Nanda'?{
        ...student,name: 'Nandu'
    }:student
)
console.log(updateName)
// 