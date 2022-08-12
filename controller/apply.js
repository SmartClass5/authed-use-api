const { User } = require('../models/user-permission');
const _ = require('lodash');
const { jwtscret } = require("../config/config");
const { Lecture } = require('../models/lecture');
const { Learner } = require('../models/learner');
let ApplyController = {}
// jwt 가 유효한지 체크하는 미들웨어
ApplyController.form = async (req, res, next) => {
  const { username } = req.user
  const { lecture_id } = req.body

  const lecdata = await Lecture.find({ _id: lecture_id })
  const userdata = await User.find({ username })

  const cparams = {
    username,
    user: [_.get(userdata, "0._id")],
    lecture_title: _.get(lecdata, "0.title"),
    lecture: [_.get(lecdata, "0._id"),]
  }

  console.log(cparams, 'cparams')
  const result = await Learner.updateOne(cparams, cparams, { upsert: true })
  return res.status(200).json({ ...cparams, msg: '수강 신청 성공' })

}
module.exports = ApplyController;