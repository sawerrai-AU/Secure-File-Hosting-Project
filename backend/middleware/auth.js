const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    // Expected token format: "Bearer <token>"
    const actualToken = token.split(" ")[1];

    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);

    req.user = decoded; // Add user info to request
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid token." });
  }
};
