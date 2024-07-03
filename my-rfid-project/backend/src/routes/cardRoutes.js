const express = require('express');const { authenticateToken } = require('../middleware/authMiddleware');const { scanCard, logout } = require('../controllers/cardController');
const router = express.Router();

router.post('/scan', scanCard);
router.post('/logout', authenticateToken, logout);
module.exports = router;