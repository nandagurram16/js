// Abstraction >>>>>>>>>>>>>>>>>>>

class ATM {
   
    constructor(withdraw){
        // constructor holds the instance variables
        this.balance = 1000;  // Corrected typo 'balanece' to 'balance'
        this.withdraw = withdraw;
    }
    
    getamount(){
        let minimum = 500;  // minimum withdrawal amount
        if((this.balance - this.withdraw) >= minimum) {  // Checking if balance after withdrawal is greater than or equal to the minimum
            console.log('Withdrawal success 😃');
        }
        else{
            console.log('Withdrawal unsuccessful 😥');
        }
    }
}

let obj = new ATM(500);
obj.getamount(); 
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Encapsulation >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

class person {
    constructor(name,age,salary){
        this.name = name
        this.age = age
        this.salary = salary
    }
    getname(){
        console.log(this.name)
    }
    getage(){
        console.log(this.age)
    }
    getsalary(){
        console.log(this.salary)
    }
}
let object = new person('Nanda',23,45000)

object.getname()
object.getage()
object.getsalary()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Inheritence

class parent {

    getmobile(){
        console.log('i-phone')
    }
}

class child extends parent {

}
let objects = new child();

objects.getmobile()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// encapsulation

class parents{
    
    getmobile(){
        console.log('android')
    }
}

class childs extends parents{

    getmobile(){
        console.log('macc')
    }
}

let obj_ouptput = new childs()
obj_ouptput.getmobile()
obj_ouptput.getmobile()



