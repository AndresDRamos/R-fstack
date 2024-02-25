import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, userRequest, menuRequest } from "../api/auth.api";
import Cookies from "js-cookie";
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [menu, setMenu] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  //Logout
  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  };
  // Set de errores
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 1000 * 10);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  //Inicio de sesión
  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      const menu = await menuRequest(user.idUsuario);
      setIsAuthenticated(true);
      setUser(res.data);
      setMenu(menu.data);
    } catch (error) {
      setErrors([error.response.data.msg]);
    }
  };

  //Datos del usuario
  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }
      try {
        const res = await userRequest(cookies.token);
        const menu = await menuRequest(cookies.token);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        setMenu(menu.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  // Carga de menu

  return (
    <AuthContext.Provider
      value={{
        signin,
        logout,
        user,
        menu,
        errors,
        loading,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
