const express = require('express')
const app = express()
const port = 3000
var host= '100.65.180.68';

var MongoClient= require('mongodb').MongoClient;
var url = 'mongodb://'+host+'/EmployeeDB';

app.get('/', function(req, res){
    MongoClient.connect(url,function(err,db){
        if(err){
            res.send("error");
        }
        res.send("Success")
        console.log('Connected to Mongo')
    }) 
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))