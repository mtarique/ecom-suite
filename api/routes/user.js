const express = require('express'); 
const userController = require('../controllers/userController'); 
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router(); 

// Login 
router.post('/login', userController.login)

// Signup
router.post('/signup', userController.signup)
router.post('/logout', userController.logout)


router.get('/protected', authMiddleware, (req, res) => {
    res.status(200).json({ status: true, message: "Protected content", data: req.user });
});

module.exports = router; 