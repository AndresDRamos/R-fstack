import { getConnection, sql, queries } from "../database/index.js";

export const getMachines = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getMachines);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createMachine = async (req, res) => {
  const { Maquina, Modelo, NoSerie, Planta, Proceso, Ubicacion } = req.body;

  if (Maquina == null || NoSerie == null) {
    return res.status(400).json({
      msg: "Favor de introducir un valor apropiado para el nombre o número de serie de la máquina",
    });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Maquina", sql.VarChar, Maquina)
      .input("Modelo", sql.VarChar, Modelo)
      .input("NoSerie", sql.VarChar, NoSerie)
      .input("Planta", sql.Int, Planta)
      .input("Proceso", sql.VarChar, Proceso)
      .input("Ubicacion", sql.VarChar, Ubicacion)
      .query(queries.createMachine);

    res.json({ Maquina, Modelo, NoSerie, Planta, Proceso, Ubicacion });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const readMachine = async (req, res) => {
  const { id } = req.params;

  if (id == 0) {
    return res.status(400).json({
      msg: "Máquina no existente",
    });
  }
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("idMaquina", id)
    .query(queries.readMachine);
  res.send(result.recordset[0]);
};

export const updateMachine = async (req, res) => {
  const { Maquina, Modelo, NoSerie, Planta, Proceso, Ubicacion } = req.body;
  const { id } = req.params;

  if (Maquina == null || NoSerie == null) {
    return res.status(400).json({
      msg: "Favor de introducir un valor apropiado para el nombre o número de serie de la máquina",
    });
  }
  const pool = await getConnection();
  await pool
    .request()
    .input("Maquina", sql.VarChar, Maquina)
    .input("Modelo", sql.VarChar, Modelo)
    .input("NoSerie", sql.VarChar, NoSerie)
    .input("Planta", sql.Int, Planta)
    .input("Proceso", sql.VarChar, Proceso)
    .input("Ubicacion", sql.VarChar, Ubicacion)
    .input("idMaquina", sql.Int, id)
    .query(queries.updateMachine);

  res.json({ Maquina, Modelo, NoSerie, Planta, Proceso, Ubicacion });
};

export const deleteMachine = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("idMaquina", id)
    .query(queries.deleteMachine);
  res.send("Máquina eliminada con éxito");
};
