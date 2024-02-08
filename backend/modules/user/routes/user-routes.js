import express  from 'express';
import {userController} from '../controllers/user-controller.js';

export const userRoute = express.Router();
userRoute.post('/login',userController.login);
userRoute.post('/register',userController.register);
userRoute.get('/profile',userController.profile);
userRoute.put('/change-password',userController.changePassword);
userRoute.delete('/remove-account',userController.removeAccount);


// const express = require('express');
// const pizzaroutes = express.Router();


// pizzaroutes.get('/home',(request,response)=>{
//     response.send('hello');
// });


// pizzaroutes.post('/home',(req,resp)=>{
//     const name = req.body;
//     const password = req.body;
//     console.log(name,password);
//     resp.send('completed'); 
// });


// module.exports = pizzaroutes;


// // app.get('/home',(request,response)=>{
// //     response.json({"hello":"first json"})
// // })
// // app.get('/about',(req,resp)=>{
// // })
