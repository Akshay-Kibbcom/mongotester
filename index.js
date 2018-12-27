const express = require('express')
const app = express()
const port = 3000

var MongoClient= require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

app.get('/', function(req, res){
    MongoClient.connect(url,function(err,db){
        if(err){
            res.send('Error connecting to Mongo');
        }
        
        res.send('Connected to Mongo')
        db.close();
    }) 
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))