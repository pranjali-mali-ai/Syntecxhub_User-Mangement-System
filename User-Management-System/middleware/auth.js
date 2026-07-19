// middleware/auth.js

// Basic Authentication Middleware
const basicAuth = (req, res, next) => {
  // Get auth header from request
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized: No credentials provided" });
  }

  // Basic auth header is: "Basic <base64(username:password)>"
  const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
  const username = auth[0];
  const password = auth[1];

  // Validate credentials
  if (username === 'admin' && password === 'admin123') {
    next(); // Credentials are valid, proceed to next middleware/route
  } else {
    res.status(401).json({ message: "Unauthorized: Invalid credentials" });
  }
};

module.exports = basicAuth;
