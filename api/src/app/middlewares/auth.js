const jwt = require("jsonwebtoken");
const {promisify} = require("util");
const authConfig = require('../../config/auth');

module.exports = async(req, res, next) => {
    const token = req.headers['x-access-token'];

    if (token) {
        return res.status(401).json({ error: "Token não enviado" });
    }

    //dividir o auth header a partir do espaço pois o token é composto por Beare + token
    //const [bearer, token] = authHeader.split(" ");
    console.log(token)

    jwt.verify(token, authConfig.secret, (dec, err) => {
        if(err){
            return res.status(500).json({msg: "Token inválido."})
        }

        req.userId = dec.id;
        req.name = dec.name;
        next();
    });
}