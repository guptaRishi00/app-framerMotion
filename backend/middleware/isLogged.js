const jwt = require("jsonwebtoken");

const isLogged = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(404).json({ message: "No Token required" });
  }

  jwt.verify(token, "rishi", (error, decoded) => {
    if (error) {
      return res.status(403).json({ error: "Invalid or expired token" });
    }
    req.user = decoded;
    next();
  });
};

module.exports = isLogged;
