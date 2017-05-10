"use strict";

const express = require('express');
const fs=require('fs');
const mongo=require('mongodb').MongoClient;
const bodyparser=require('body-parser');
const path = require('path');
const config = require('./config');
const mongoURL=config.get('MONGO_URL');
const app=express();

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json()); // for parsing application/json
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});



app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/request',(req,res)=>{
res.sendFile(path.join(__dirname,'public','request.html'));
});

app.get('/project',(req,res)=>{
res.sendFile(path.join(__dirname,'public','project.html'));
});

app.get('/full-stack',(req,res)=>{
res.sendFile(path.join(__dirname,'public','back-end.html'));
});
app.get('/APIs',(req,res)=>{
res.sendFile(path.join(__dirname,'public','api.html'));
});
app.get('/Front-end',(req,res)=>{
res.sendFile(path.join(__dirname,'public','front-end.html'));
});

app.post('/lucky',(req,res)=>{
var data=req.body;
mongo.connect(mongoURL,(err,db)=>{
if(err){db.close(); res.sendStatus(500);}
else{
var collection=db.collection('requests');
collection.insert(data,(err,data)=>{
if (!err){
  res.send('success');
  db.close();
}
else{
db.close(); res.sendStatus(500);
}
})
}
});
});



var server=app.listen(process.env.port||'8080',function(){
  console.log("running on"+server.address().port);
})
