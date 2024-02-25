// En tu página de Usuarios
import React, { useState, useEffect } from "react";
import { BasicTable } from "../../components/material/BasicTable";
import { Box, Typography } from "@mui/material";
import { adminUsersRequest } from "../../api/admin.api";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function loadUsers() {
      const response = await adminUsersRequest();
      setUsers(response.data);
    }
    loadUsers();
  }, []);
  if (users.length === 0) {
    return <div>Cargando...</div>;
  }

  const columns = Object.keys(users[0]).slice(1);


  return (
    <Box margin={2}>
      <Typography variant="h1">Administrador de usuarios</Typography>
      <Box margin={2}>
        <BasicTable data={users} columns={columns}  />
      </Box>
    </Box>
  );
}

export default Users;
