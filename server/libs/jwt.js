import config from "../config.js";
import jwt from "jsonwebtoken";

export function accessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, config.token, { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}
