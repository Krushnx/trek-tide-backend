const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const {registerUser , loginUser, logoutUser , authenticateUser , getUserData} = require('../controller/userController')


// Register

router.post("/", registerUser);

// Log in User
router.post("/login" ,loginUser);

// Log Out User
router.get("/logout" , logoutUser)


// Authentication

router.get('/loggedIN' ,authenticateUser )
  
  
router.get('/userdata' , auth ,  getUserData )


module.exports = router;
  