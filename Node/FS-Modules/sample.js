
const fs = require('fs')

fs.readFile('sample.txt','utf8',(err,data) =>{

    if(err){
        console.log('error')
    }
    else{
        console.log(data)
    }
})

fs.writeFile('writefile.js','utf8',(err) =>{
    if(err){
        console.log('error')
    }
    console.log('file created')
})