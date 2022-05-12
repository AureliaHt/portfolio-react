const router = require('express').Router();
const adminController = require('../controllers/adminController');

// AUTH
router.post("/register", adminController.signUp);
router.post('/login', adminController.signIn);
router.get('/logout', adminController.logout);

module.exports = router;