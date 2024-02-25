import { createContext, useContext, useState } from "react";
import {
  getMachinesRequest,
  createMachineRequest,
  readMachineRequest,
  updateMachineRequest,
  deleteMachineRequest,
} from "../api/machines.api";

export const MachineContext = createContext();
export const useMachines = () => {
  const context = useContext(MachineContext);
  if (!context) {
    throw new Error("Te encuentras fuera del MachineContextProvider");
  }
  return context;
};

export const MachineContextProvider = ({ children }) => {
  const [machines, setMachines] = useState([]);

  async function loadMachines() {
    const response = await getMachinesRequest();
    setMachines(response.data);
  }

  const createMachine = async (machine) => {
    try {
      const response = await createMachineRequest(machine);
      // setMachines([...machines, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const readMachine = async (id) => {
    try {
      const response = await readMachineRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateMachine = async (id, newFields) => {
    try {
      const response = await updateMachineRequest(id, newFields);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteMachine = async (id) => {
    try {
      const response = await deleteMachineRequest(id);
      setMachines(machines.filter((machine) => machine.idMaquina !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MachineContext.Provider
      value={{
        machines,
        loadMachines,
        createMachine,
        readMachine,
        updateMachine,
        deleteMachine,
      }}
    >
      {children}
    </MachineContext.Provider>
  );
};