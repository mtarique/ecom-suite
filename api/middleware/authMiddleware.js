const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    console.log()
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ status: false, message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user data to the request object
        next();
    } catch (error) {
        return res.status(401).json({ status: false, message: "Invalid or expired token" });
    }
};