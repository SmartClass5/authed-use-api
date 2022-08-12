const express = require("express");

const router = express.Router();
const ApplyController = require('../controller/apply');
const { validateToken } = require("../middlewares/AuthMiddleware");

// POST /tweeets
router.post('/', validateToken, ApplyController.form);

module.exports = router;