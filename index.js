const express=require('express');
const app=express();
const bodyParser=require('body-parser');
require('dotenv').config()
const connectDb=require('./config/db')
const eventRoute=require('./route/eventRoute')
const sessionRoute=require('./route/sessionRoute')
const cors=require('cors')

const PORT=process.env.PORT || 5000;
connectDb();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/event',eventRoute);
app.use('/api/sessions',sessionRoute);




app.listen(PORT),()=>{
    console.log(`Server running on port ${PORT}`);  // Displaying the server is running message
}

