// ES6
class god{
    constructor(){
        this.age=23
    }
    printage(){
        console.log(this.age)
    }
}

class parent extends god{
    constructor(){
        super()
        this.name='nanda'
        this.age=29
    }
    printname(){
        console.log(this.name)
    }
}
const person=new parent()
person.printname()
person.printage()
// =========================================

// ES7


class es7{
    age=20
    printage=()=>console.log(this.age)
}

class child extends es7{
    name='kumar'
    age=30
    printName=()=>console.log(this.name)
}

const kid= new child()
kid.printName()
kid.printage()

// ex1
class dad{
    name='adi'
    age=28
    place='kadiri'
    printdad=()=>console.log(this.name,this.age,this.place)
}

class son extends dad{
    name='nanda'
    place="bengalore"
    printson=()=>console.log(this.name,this.place)
}

const bulb = new son()
bulb.printdad()
bulb.printson()

// ex2

class nanda{
    age=20
    printage=()=>{
        console.log(this.age)
    }
}

class kumar extends nanda{
    name='gurram nanda'
    age=29
    printName=()=>{
        console.log(this.name)
    }
}

const gurram =new kumar()
gurram.printName()
gurram.printage()

// Spread Operator in array

set1 = [1,2,3,4,5]
set2 = [...set1, 6,7,8,9,10]
console.log(set2)

num1 = ['iamNandaKumar']
num2 = [...num1,"iamfromkadiri"]

console.log(num2)

// Spread Operator in object

const cet1={
    name:'nanda',
    age:24,
    place:'kadiri'
}
const cet2={
    ...cet1,
    email:'kumar@gmail'
}
console.log(cet2)

// Destructuring in array

values = [10,20,50];
[a,b,c] = values;
console.log(a,b,c);

// in object

values ={
    email:'#gmial.cpm',
    age:20
}
const {email,age} = values
console.log(email)
console.log(age)

// Rest operator 

const array =(a,...arr) =>{
    console.log(arr)
    console.log(a)
}
array(1,2,3,4,5,6)

let arr = [10,20,30,40,50,60]

const [...rest] = arr
console.log(rest)

// in object

const obj = { name: "John", age: 25, city: "New York", country: "USA" };

const { name, ...details } = obj;

console.log(name);    // "John"
console.log(details); // { age: 25, city: "New York", country: "USA" }

// arrays

let arrays = [1,2,3,4]
arrays.push(50)
arrays.pop()
console.log(arrays)

// splice

let splice = [1,2,3,4,5]
let index = 2;
splice.splice(index,3)
console.log(splice)

// ex1

let remove = [1,2,3,4,5,7]
let ind = remove.indexOf(4)
remove.splice(ind,3)
console.log(remove)









