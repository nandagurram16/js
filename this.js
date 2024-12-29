
//This is a global window object.it always reutns the ouput of this is window object.when it is in not a strict mode

console.log(this)

// this inside a function

function fun(){
    console.log(this)
}
fun()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//how this keword depends depends and called(window)


function fu(){
    console.log(this)
}
fu()
window.fu()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// this inside object method

// const obj = {
//     name:'nanda'
//     x:function(){
//         console.log(this)
//     }
// }
// obj.x()

//here we are callig  one method(method means if we make a function as a part of an object then it is known as method)

//so we are calling above function by using "method"

// here the value of this is object 
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// sharing methods

// =>Call

// => call method is ' barrowing a fuction from other objects inside the current obj'

const student = {
    fname:'nanda',
    lname:'kumar'

}
const printfullname= function(town,state){
    console.log(this.fname + '' + this.lname + town + "from" + state)
}

printfullname.call(student, "kadiri",'AP')

// here using apply method(passig arguments in array)


printfullname.apply(student,['delhi','agra'])

// here using Bind method(passig arguments in array)
// this method returns the copy of another object and it will bind at object.that returns the function.It doesn't call directly

const printmyname = printfullname.bind(student,'banglore','russia')

printmyname()

console.log(printmyname)




const student2 ={
    fname:'gurram',
    lname:'nandu'
}

printfullname.call(student2,"PLACE","DELHI")

// here apply method(passig arguments in array)

printfullname.apply(student2,['kolkata','golak'])

// here using Bind method(passig arguments in array)

// this method returns the copy of another object and it will bind at object.that returns the function.It doesn't call directly

const print_my_name = printfullname.bind(student2,'banglore','russia')

print_my_name()

console.log(print_my_name)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// how does this keyword beaves inside the arrow function

// => arrow function donot have its ow this.it returns the value of the enclosing lexical context
// here "lexical" means how a obect returns inside the code

let obj ={
    fname:'anda',
    x: ()=>{
        console.log(this)
    }
}
obj.x()

// =>>>>>>>>>>>>>>>>>>>>>>>

// this inside nested arrow funtion

let object ={
    lname:'nanda kumar',

    my_name: function (){
        // enclosig lexical context
        const obj = () =>{
            console.log(this)
        }
        obj()
    }
}
object.my_name()
