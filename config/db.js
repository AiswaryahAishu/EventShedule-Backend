const mongoose=require('mongoose');

// Connect to MongoDB

const connectDb=async()=>{
    const url=process.env.MONGO_URI ||""
    await mongoose.connect(url)
    .then(()=>{
        console.log('Connected to MongoDB')
    })
    .catch((err)=>{
        console.log(err);
        
    })
}

module.exports=connectDb;