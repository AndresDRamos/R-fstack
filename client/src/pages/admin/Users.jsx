// En tu página de Usuarios
import React, { useState, useEffect } from "react";
import { BasicTable } from "../../components/material/BasicTable";
import { Box, Typography } from "@mui/material";
import { adminUsersRequest } from "../../api/admin.api";
import { Loading } from "../../components/material/Loading";

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
    return <Loading />;
  }
  const columns = Object.keys(users[0]).slice(1);
  const options = {};
  return (
    <Box margin={2}>
      <Typography variant="h1">Administrador de usuarios</Typography>
      <Box margin={2}>
        <BasicTable
          data={users}
          columns={columns}
          additionalOptions={options}
        />
      </Box>
    </Box>
  );
}

export default Users;
