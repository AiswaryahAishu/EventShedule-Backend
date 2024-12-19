const Events = require('../model/event')

const events=async(req,res)=>{
    console.log(req.body);
    const event=Events.create(req.body)
    res.status(200).send(event)
    
}

const getEvents = async(req, res)=>{
    const events=await Events.find()    
    res.json(events)
}
const fetchEventById=async(req,res)=>{
    try{
        const eventid=req.params.id
        
        const session = await Events.findById(eventid);
        console.log(session)
        res.status(200).json(session);
    }catch(error){
        console.error("error fetching events:",error);
        res.status(500).json({error:"failed to fetch events"});
    }
   
}

const deleteEventById=async(req,res)=>{
    try{
        const eventid=req.params.id
        console.log(eventid);
        
        
        const event = await Events.findByIdAndDelete(eventid);
        console.log(event)
        res.status(200).json(event);
    }catch(error){
        console.error("error deleting events:",error);
        res.status(500).json({error:"failed to delete events"});
    }
 
}


module.exports={events,getEvents,fetchEventById,deleteEventById};