const express = require("express");

const router = express.Router();
const ConfirmController = require('../controller/confirm');
// POST /tweeets
router.post('/', ConfirmController.form);

module.exports = router;