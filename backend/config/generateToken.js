const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, "rishi", {
    expiresIn: "30d",
  });
};

module.exports = {
  generateToken,
};
