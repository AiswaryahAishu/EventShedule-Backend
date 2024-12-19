const express = require('express');
 const Router=express.Router()
 const {createSession,getSessions,AllSessions}=require('../controller/sessionController');
const session = require('../model/session');


 Router.post('/',createSession )
 Router.get('/allsession',AllSessions)

 Router.get('/:id',getSessions)

 module.exports=Router;