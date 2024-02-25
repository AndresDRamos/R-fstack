import jwt from "jsonwebtoken";
import config from "../config.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });
  jwt.verify(token, config.token, (err, user) => {
    if (err) return res.status(401).json({ msg: "Invalid token" });
    req.user = user;
    next();
  });
};
