const express = require('express');

const addbookController = require('../controllers/addbook');

const router = express.Router();

router.post('/addbook' , addbookController.addbook);

module.exports = router;