const express = require('express')
const app = express()
const port = 3000
var host= 'localhost';

var MongoClient= require('mongodb').MongoClient;
var url = 'mongodb://'+host+'/EmployeeDB';

app.get('/', function(req, res){
    MongoClient.connect(url,function(err,db){
        if(err){
            res.send('Error connecting to Mongo');
        }
        else{
            console.log('Connected to Mongo')
            res.send('Successfully Wrote to Mon sdsfsdsfsd  ssndfvhbdjhvfbdkfjndk g o');
        }
        
        //db.close();
    }) 
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))