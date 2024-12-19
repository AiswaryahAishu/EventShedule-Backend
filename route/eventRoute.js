 const express = require('express');
 const Router=express.Router()
 const {events,getEvents,fetchEventById,deleteEventById}=require('../controller/eventController')

 Router.post('/',events)
 Router.get('/',getEvents)
 Router.get('/:id',fetchEventById)
 Router.delete('/:id',deleteEventById)



 module.exports=Router;
