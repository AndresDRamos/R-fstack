import { getConnection, sql, queries } from "../database/index.js";
import bcrypt from "bcryptjs";
import { accessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import config from "../config.js";

export const signup = async (req, res) => {
  const { Nombre, Correo, Clave } = req.body;
  if (Nombre == null) {
    return res.status(200).json({
      msg: "Introduce el nombre del usuario",
    });
  }
  if (Correo == null) {
    return res.status(200).json({
      msg: "Introduce el correo del usuario",
    });
  }
  if (Clave == null) {
    return res.status(200).json({
      msg: "Asigna una clave de acceso al usuario",
    });
  }

  try {
    const pool = await getConnection();
    const claveHash = await bcrypt.hash(Clave, 10);
    await pool
      .request()
      .input("Nombre", sql.VarChar, Nombre)
      .input("Correo", sql.VarChar, Correo)
      .input("Clave", sql.VarChar, claveHash)
      .query(queries.sigunp);
    res.json({ Nombre, Correo, Clave });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const pool = await getConnection();
    const { Correo, Clave } = req.body;
    const result = await pool
      .request()
      .input("Correo", sql.VarChar, Correo)
      .input("Clave", sql.VarChar, Clave)
      .execute("WaPP.Auth.Usuario");

    if (result.recordset.length) {
      const user = result.recordset[0];
      const token = await accessToken({
        id: user.idUsuario,
      });
      res.cookie("token", token);
      res.json({
        id: user.idUsuario,
        Nombre : user.Nombre,
        Departamento: user.Departamento,
      });
    } else {
      return res.status(401).json({
        msg: "Correo o contraseña inválidos",
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Error interno del servidor",
      error: error.message,
    });
  }
};

export const menu = async (req, res) => {
  const pool = await getConnection();
  const { token } = req.cookies;
  if (!token) return res.send("false");
  jwt.verify(token, config.token, async (error, user) => {
    if (error) return res.sendStatus(401);
    const result = await pool
      .request()
      .input("idUsuario", sql.Int, user.id)
      .execute("WaPP.auth.Menu");
    return res.json(result.recordset);
  });
};

export const user = async (req, res) => {
  const pool = await getConnection();
  const { token } = req.cookies;
  if (!token) return res.send(false);
  jwt.verify(token, config.token, async (error, user) => {
    if (error) return res.sendStatus(401);
    const result = await pool
      .request()
      .input("idUsuario", sql.Int, user.id)
      .execute("WaPP.auth.Usuario");
    return res.json(result.recordset[0]);
  });
};
