const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

const {getallhotels , asyncFunc , getHotel , createHotel, updateHotel} = require('../controller/hotelController')



// Get all Hotels here n
router.get('/',getallhotels);

// Get One Hotel
router.get('/:id' , asyncFunc , getHotel);


// Create a new hotel
router.post('/' , createHotel)


// Update a Hotel
router.patch('/:id' , asyncFunc,updateHotel)


module.exports = router;