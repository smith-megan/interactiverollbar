const express = require('express')
const path= require('path')
const Rollbar = require('rollbar')

const app = express()

let students=[]

// include and initialize the rollbar library with your access token
var rollbar = new Rollbar({
  accessToken: '5520cd4cf12a4fe48fa8a32e60b9ee10',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");
app.get('/', (req, res)=>{
res.sendFile(path.join(__dirname, 'public/index.html'))
rollbar.info('html file served successfully.')
})

const port=process.env.PORT || 4545

app.listen(port, ()=> console.log(`take us to a port of ${port}`))