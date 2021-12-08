const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next)=>{
    let token = req.header('Authorization')
    if(!token) return res.status(400).json('Access Denied');
    // try es como un if
    try{
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        req.user = decoded;
    }catch(error){
        return res.status(400).json('Access Denied');
    }

next();

}
exports.verifyToken = verifyToken;