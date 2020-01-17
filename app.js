const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://amaithi24:B97nL8324ZXZAm3hu7Q8rGxKSUzQmeh78KIiwrzHE6dxJLH7XzNJMvtWrxYMTWYav2MvazK5bit1LwefI0DoBQ%3D%3D@amaithi24.documents.azure.com:10255/?ssl=true";
var dateFormat = require('dateformat');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());




app.get('/', (req, res) => {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("familiesdb");
        dbo.collection("families").findOne({}, function(err, result) {
            if (err) throw err;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');    
            res.send(result);
          });
        });
});
app.post('/uirequest', (req, res) => {
console.log(req.body);
            
            

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
             res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');    
          
    res.send('request sent');
        

});




app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});