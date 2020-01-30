const jwt = require('jsonwebtoken');
const helpers = require('./users_helpers')

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;
    const decodedJwt = jwt.decode(token);

    const id = await helpers.getUserId({ email: decodedJwt.email });

    console.log("Decoded Token: ", decodedJwt);
    console.log("req.params.id: ", req.params.id);
    if (decodedJwt.id === req.params.id) {
        console.log("Valid");
        next();
    } else {
        console.log("Invalid");
        next();
    }
}