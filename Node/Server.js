
// const user_registration = require('./register')

// const os = require('os')

// const fs = require('fs')

const xpress = require('express')
// const { err } = require('console')

// function sayhello()
// {
//     console.log('hello nodejs')
// }
// sayhello()

//  const isuser = user_registration.user()
//  if (isuser){
//     console.log('user is exicisting')
//  }
//  else{
//     user_registration.registerduser()
//  }

// // ----

// console.log(os.freemem())

// console.log(os.hostname())
// console.log(os.arch())
// console.log(os.loadavg())
// console.log(os.cpus())
// console.log(os.release())
// console.log(os.platform())

// // ---------

// fs.writeFile('./sample.txt','testing fs module',(err) =>{
//     if(err){
//         console.log('error occured')
//         return
//     }
//     console.log('filr created sucessfully')
// })
// // -----------------------
// fs.readFile('./sample.txt','utf8',(err,data) =>{
//     if (err){
//         console.log('error')
//         return
//     }
//     console.log('data in a file:', data)
// })
// ------------------

const app = xpress()

app.get('/',(req,res) =>{
    console.log(req) 
    res.send('hey, welcome to the server')
})

app.get('/say bye',(req,res) =>{
    res.send('okay byee!!')
})

app.post('/saybye',(req,res) =>{
    console.log('post created')
    res.send('post created')
})

app.post('/postcreateduser',(req,res) =>{
    console.log('userpostcreated')
    res.send('userpostcreated')
})

app.put('/updateduserdetails',(req,res) =>{
    console.log('user dtails updated')
    res.send('user details updated')
})

app.delete('/deleted',(req,res) =>{
    res.send('saybye is deleted')
})
app.listen(3000,() =>{
    console.log('server is running')
})