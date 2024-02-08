import express from 'express';
import { userRoute } from './modules/user/routes/user-routes.js';
const app = express(); 
app.use(express.json());
app.use('/', userRoute);  //app.use(middleware) , middleware is just a function
const server = app.listen(1234,(err)=>{
    if(err){
        console.log('Server Crash ', err);
    }
    else{
        console.log('Server Up and Running ', 
        server.address().port);
    }
})
    












//         console.log(err);
    //     }
    //     else{
    //         console.log('server started',server.address().port);
    //     }
    // })

// const express = require('express');
// const pizzaroutes = require('./routes/pizzaroutes/pizzaroutes');
// //app.use(express.static('public'))
// const app =express();
// app.use("/",pizzaroutes);
// const server = app.listen(1234,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('server started',server.address().port);
//     }
// })