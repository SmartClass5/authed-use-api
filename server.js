const express = require("express");
const mongoose = require('mongoose');
// env환경변수 라이브러리
const cors = require('cors');
const morgan = require("morgan");

const app = express();
const Routers = require('./routes/routes.js');
const { mongourl } = require("./config/config.js");

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
const port = 30002;

mongoose.connect(`${mongourl}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//  POST login요청이 들어오면 body에 id와 password를 실어서 요청으로 가정해서 jwt를발급해준다.
app.use('/authed-api', Routers);
app.get('/test', (req, res) => {
    return res.json({ msg: "test" })
});
app.use((req, res, next) => {
    res.status(404).send('Not found')
})

app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).send('internal server Error')
})
app.listen(port);