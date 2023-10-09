const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
mongoose.connect(process.env.DB);
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());


const db = mongoose.connection;

db.on('error' , (error)=>{console.log(error);});

db.once('open' , ()=>{console.log("Conneced to MOngoDB Atlas Successfully");});

app.use(express.json());

const hotelRoutes = require('./routes/hotels');

app.use('/hotels' , hotelRoutes);


app.listen(PORT, ()=>{
    console.log(`App listed on port http://localhost:8000`);
});
