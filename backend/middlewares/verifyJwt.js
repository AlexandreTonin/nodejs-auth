import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

function verifyJwt(req, res, next) {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}


export { verifyJwt }
