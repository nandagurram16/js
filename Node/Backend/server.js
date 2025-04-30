
const express = require('express')

const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res) =>{
    console.log('default route')
})

app.post('add-item',(req,res) =>{
    console.log(req.body)
})
app.listen(4000,() =>{
    console.log('server running on port 4000')
})