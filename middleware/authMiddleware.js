

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;


const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send("Forbidden");
    }

    req.user = user;
    next();
  });
};

module.exports = authMiddleware;
