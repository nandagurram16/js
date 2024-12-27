
// Normal Function
function nanda(){
    return "kumar"
}

let data = nanda()
console.log(data)

// ASync Function

let p =new Promise((resolve, reject) => {
    resolve('promis resolved')
})

async function kumar(params) {
    return params= p
}

let love = kumar()

console.log(love)  //it gives output with promises
love.then((res)=>console.log(res)) //it gives only output bcz we used .then here

// ...>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('my promise'),2000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('heloo anda'),1000)
})


// function getdata(){
//     p1.then(res => console.log(res))
//     console.log('namastea')
// }
// getdata() //instead of this use async function with await:

async function async_data(){
    let data= await p1
    console.log('namastea javascript')
    console.log(data)

    let data2= await p2
    console.log('namastea javascript')
    console.log(data2)
}
async_data()
// ========================================

const api_url = 'https://jsonplaceholder.typicode.com/users'

async function fetch_api(){
      
   const data3 = await fetch(api_url)

   const jsonvalue = await data3.json()

   console.log(jsonvalue)

 // fetch() => response.json() => jsonvalue    

}
fetch_api()
// ======================================

const random_url = 'https://fuseslbbbd.com/users'

async function get_url(){

    // try block is using bcz an error is there this try block will throw that error
    try{
        const url = await fetch(random_url)

        const jsonval = await url.json()
    
        console.log(jsonval)
    } catch (err){
        console.log(err)
    }
    
}
get_url()//.catch((err)=> console.log(err))