const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = async function(req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token. Authorization Denied." });
  }

  try {
    const decoded = await jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    console.log(err.message);
    res.status(401).json({ msg: "Token is not valid." });
  }
};
