import React from "react";
import { useEffect } from "react";
import MaquinaCard from "../../components/MachineCard";
import { useMachines } from "../../context/Machines.context";
import { Grid, Box, Typography, Button } from "@mui/material";

function Machines() {
  const { machines, loadMachines } = useMachines();

  useEffect(() => {
    loadMachines();
  }, []);

  const renderMain = () => {
    if (machines.length === 0) {
      return <h1>Sin máquinas registradas</h1>;
    }

    return (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        py={2}
      >
        {machines.map((machine) => (
          <Grid item xs={12} sm={6} md={4} key={machine.idMaquina}>
            <MaquinaCard machine={machine} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Box margin={2}>
      <Typography variant="h1" gutterBottom>
        Máquinas
      </Typography>
      <Button
        sx={{ justifyContent: "flex-end" }}
        color="secondary"
        variant="outlined"
        href="/new"
      >
        Nueva máquina
      </Button>
      {renderMain()}
    </Box>
  );
}

export default Machines;
