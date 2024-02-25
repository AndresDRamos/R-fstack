import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { useInformes } from "../context/InformesContext";
function Index() {
  const { informes, loadInformes } = useInformes();
  useEffect(() => {
    loadInformes();
  }, []);

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        py={2}
      >
        select * from
      </Grid>
    </Container>
  );
}

export default Index;
