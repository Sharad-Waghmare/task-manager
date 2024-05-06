const express = require('express');
const { getAllUser, registerUser, loginUser } = require('../controller/userController');

const router = express.Router();

router.get('/allUser', getAllUser);
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;