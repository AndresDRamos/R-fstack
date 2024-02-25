import { getConnection, sql } from "../database/index.js";

export const adminUsers = async (req, res) => {
  const { Accion, Correo, Nombre, idUsuario } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Accion", sql.VarChar, Accion)
      .input("Correo", sql.VarChar, Correo)
      .input("Nombre", sql.VarChar, Nombre)
      .input("idUsuario", sql.Int, idUsuario)
      .execute("WaPP.Admin.Usuarios");
    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({
      msg: "Error interno del servidor",
      error: error.message,
    });
  }
};
