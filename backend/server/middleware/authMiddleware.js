const requireAdmin = (req, res, next) => {
  const token = req.header("x-admin-token");
  if (!process.env.ADMIN_TOKEN || token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ message: "Unauthorized admin access." });
  }
  return next();
};

module.exports = { requireAdmin };
