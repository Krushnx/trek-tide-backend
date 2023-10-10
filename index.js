const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const cookieparser = require('cookie-parser')
mongoose.connect(process.env.DB);
const app = express();
const corsOptions ={
    origin:['http://localhost:3000' , 'https://trek-tide.web.app'], 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));//set up route

const db = mongoose.connection;

db.on('error' , (error)=>{console.log(error);});

db.once('open' , ()=>{console.log("Conneced to MOngoDB Atlas Successfully");});

app.use(express.json());
app.use(cookieparser());


app.get('/', (req, res) => {res.sendStatus(200)})


const hotelRoutes = require('./routes/hotels');
const userRoutes = require('./routes/userRoutes')
app.use('/hotels' , hotelRoutes);
app.use('/auth' , userRoutes);

app.listen(PORT, ()=>{
    console.log(`App listed on port http://localhost:8000`);
});
