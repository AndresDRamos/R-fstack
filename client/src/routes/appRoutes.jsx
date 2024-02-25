import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { AuthProvider } from "../context/AuthContext.jsx";
import { Layout } from "../components/layout";

import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import Machines from "../pages/mantenimiento/Machines.jsx";
import Users from "../pages/admin/Users.jsx"
import { MachineContextProvider } from "../context/Machines.context.jsx";

export const AuthRoutes = () => {
  return (
    <AuthProvider>
      <MachineContextProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/home" />} />
            <Route element={<ProtectedRoute />}>
              <Route
                path="/home"
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />
              <Route
                path="/mantenimiento/maquinas"
                element={
                  <Layout>
                    <Machines />
                  </Layout>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <Layout>
                    <Users />
                  </Layout>
                }
              />
            </Route>
          </Routes>
        </Router>
      </MachineContextProvider>
    </AuthProvider>
  );
};
