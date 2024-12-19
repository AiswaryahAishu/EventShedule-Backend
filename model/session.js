// models/Session.js
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    speaker: { type: String, required: true },
    description: {type:String},
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
});

const session= mongoose.model('Session', sessionSchema);

module.exports = session;
