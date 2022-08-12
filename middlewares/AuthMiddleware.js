const { verify } = require("jsonwebtoken")
const { jwtscret } = require("../config/config")
const key = jwtscret;
const validateToken = (req, res, next) => {
    console.log(req.headers)
    const accessToken = req.headers.accesstoken
    console.log(accessToken, 'accessToken')
    if (!accessToken) {
        return res.json({ error: "User not logged in !!" })
    }
    try {
        const validToken = verify(accessToken, key);
        console.log(validToken, 'validToken')
        if (validToken) {
            req.user = validToken;
            return next();
        }
    } catch (err) {
        return res.json({ error: err })

    }
}

module.exports = { validateToken }