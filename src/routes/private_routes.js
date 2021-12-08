const express = require('express');
const router = express.Router();
const mysqlConnection = required('../config/db.config')
const {verifyToken} = require('..config/verifyToken');
const {getprofileauthorization} = require('../controllers/users.controllers')


// router.get('/',)
router.get('/users',verifyToken,getprofileauthorization);

module.exports = router;