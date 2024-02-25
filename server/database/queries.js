export const queries = {
  // START CRUD MACHINES
  getMachines: "Select * from Mantenimiento.Maquinas",
  createMachine:
    "Insert into Mantenimiento.Maquinas (Maquina,Modelo,NoSerie,Planta,Proceso,Ubicacion) VALUES (@Maquina,@Modelo,@NoSerie,@Planta,@Proceso,@Ubicacion)",
  readMachine:
    "SELECT * from Mantenimiento.Maquinas where idMaquina = @idMaquina",
  updateMachine:
    "UPDATE Mantenimiento.Maquinas Set Maquina = @Maquina, Modelo = @Modelo, NoSerie = @NoSerie, Planta = @Planta, Proceso = @Proceso, Ubicacion = @Ubicacion Where idMaquina = @idMaquina",
  deleteMachine:
    "DELETE FROM [WaPP].[Mantenimiento].[Maquinas] Where idMaquina = @idMaquina",
  // END CRUD MACHINES

  getInformes:
    "Select * from WaPP.dbo.InformesPBI",
  readInforme:
  "Select * from WaPP.dbo.InformesPBI where idInforme = @idInforme"
};