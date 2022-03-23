const express = require('express')
const app = express()

app.get('/', function(req, res){
    consolo.log(req.query)
    res.send('Hello World!')
})

app.listen(3000, function(){
    console.log('Example listening on port 3000')
})

