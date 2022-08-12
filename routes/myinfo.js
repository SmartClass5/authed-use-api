const express = require("express");

const router = express.Router();
const MyInfoController = require('../controller/myinfo');
// POST /tweeets
router.post('/', MyInfoController.form);

module.exports = router;