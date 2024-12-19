const session=require('../model/session')

const createSession=async(req,res)=>{
    try{
        // const {eventId}=req.params
        const{speaker,description,startTime,endTime,Actions,eventId}=req.body
        console.log(req.body);
        

        const newSession = new session({ eventId, speaker, description, startTime, endTime , Actions});
    await newSession.save();

    res.status(201).json({ message: 'Session created successfully', session: newSession });

  }catch (err) {
    res.status(500).json({ message: 'Error creating session', error: err.message });
  }
}

const getSessions=async(req,res)=>{
    try {
        const { eventId } = req.params;
        const sessions = await session.find({ eventId })
    
        res.status(200).json(sessions);
      } catch (err) {
        res.status(500).json({ message: 'Error fetching sessions', error: err.message });
      }

}

const AllSessions=async(req,res)=>{
  try{
    const prgm=await session.find()
    console.log("my sessions",prgm);
    res.status(200).json(prgm);
  } catch (err){
    res.status(500).json({ message: 'Error fetching sessions', error: err.message });
  }
    
}
module.exports={createSession,getSessions,AllSessions};