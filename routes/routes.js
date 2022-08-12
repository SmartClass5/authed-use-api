const express = require("express");

const router = express.Router();

const MyInfoRouters = require('./myinfo'); // 마이페이지
const ApplyRouters = require('./apply'); // 수강 신청
const ConfirmRouters = require('./confirm'); // 수강 상태 확인

router.use('/myinfo', MyInfoRouters);
router.use('/apply', ApplyRouters);
router.use('/confirm', ConfirmRouters);

module.exports = router;