const express = require('express')
const path= require('path')

const app = express()

app.get('/', (req, res)=>{
res.sendFile(path.join(__dirname, 'public/index.html'))
})

const PORT=4545

app.listen(PORT, ()=> console.log(`take us to a port of ${PORT}`))