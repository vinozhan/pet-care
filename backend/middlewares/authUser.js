import jwt from "jsonwebtoken";

//user auth
const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers
        if(!token){
            return res.json({success: false, message: "Authorization failed.Log in again."})
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = token_decode.id;
        req.body.userId = token_decode.id
        next()
        
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export default authUser