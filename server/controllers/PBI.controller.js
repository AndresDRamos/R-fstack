import { getConnection, sql, queries } from "../database/index.js";

export const getInformes = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getInformes);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.massage);
  }
};

export const readInforme = async (req, res) => {
  const { id } = req.params;

  if (id == 0) {
    return res.status(400).json({
      msg: "Informe no existente",
    });
  }
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("idInforme", id)
    .query(queries.readInforme);
  res.send(result.recordset[0]);
};
