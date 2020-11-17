
//Access to express library
const express = require('express');
//Creates an instance of the express constructor, named here as "app"
const app = express();


const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
    ]
    app.get('/users', function(req,res){
         res.json({
              success: true,
              message: 'successfully got users. Nice!',
              users: mockUserData
         })
    })


    
//The app.listen method will start up the server locally on the port you give as its first argument
app.listen(8000,function(){
    console.log("server is running")
    })