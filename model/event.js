const mongoose = require('mongoose');

const eventSchema=new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,  // Generate unique id for each event
    title:{type:String,required:true},
    description:{type:String,required:true},
    date:{type:Date,required:true},
    location:{type:String,required:true},

})

const Event=mongoose.model('Event',eventSchema);

module.exports=Event;