import { getConnection } from "../database/index.js";

export const routes = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().execute("WaPP.dbo.Rutas");
    return res.json(result.recordset);
  } catch (error) {
    res.status(500).json({
      msg: "Error interno del servidor",
      error: error.message,
    });
  }
};
