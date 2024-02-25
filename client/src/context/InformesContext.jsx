import { createContext, useContext, useState } from "react";
import { getInformesRequest, readInformeRequest } from "../api/informes.api";

export const InformeContext = createContext();
export const useInformes = () => {
  const context = useContext(InformeContext);
  if (!context) {
    throw new Error("Te encuentras fuera del InformeContext");
  }
  return context;
};

export const InformesProvider = ({ children }) => {
  const [informes, setInformes] = useState([]);
  async function loadInformes() {
    const response = await getInformesRequest();
    setInformes(response.data);
  }
  const readInforme = async (id) => {
    try {
      const response = await readInformeRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <InformeContext.Provider
      value={{
        informes,
        loadInformes,
      }}
    >
      {children}
    </InformeContext.Provider>
  );
};
