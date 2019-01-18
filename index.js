const express = require('express')
const app = express()
const port = 3000
var host= 'skalera-deployment-mongodb.development.svc.cluster.local';

var MongoClient= require('mongodb').MongoClient;
var url = 'mongodb://'+host+'/EmployeeDB';

app.get('/', function(req, res){
    MongoClient.connect(url,function(err,db){
        if(err){
            res.send('Error connecting to Mongo');
        }
        else{
            console.log('Connected to Mongo')
            res.send('Successfully Wrote to Mongo');
        }
        
        //db.close();
    }) 
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))