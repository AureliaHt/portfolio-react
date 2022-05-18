const router = require('express').Router();
const adminController = require('../controllers/adminController');

// AUTH
router.post('/admin', adminController.signIn);
router.get('/logout', adminController.logout);

module.exports = router;