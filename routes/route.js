const express = require('express');
const router = express.Router();
const {testServer} = require('../controllers/controller');
router.get('/test',testServer)

module.exports = router;