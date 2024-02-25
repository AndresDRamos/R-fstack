import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ConfirmDialog from "./ConfirmDialog";
import { tokens } from "../../theme.js";
import { Tooltip, useTheme } from "@mui/material";

const CustomToolbarSelect = ({ selectedRows }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    console.log("Eliminar:", selectedRows.data.length, "filas");
    handleClose();
  };

  const handleEdit = () => {
    console.log("Editar: ", selectedRows.data.length, "filas");
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {selectedRows.data.length === 1 && (
        <Tooltip title="Editar">
          <IconButton onClick={handleEdit} color="primary">
            <EditIcon style={{ color: colors.sFive[500] }} />
          </IconButton>
        </Tooltip>
      )}
      <Tooltip title="Eliminar">
        <IconButton onClick={handleOpen} color="primary">
          <DeleteIcon style={{ color: colors.orange[700] }} />
        </IconButton>
      </Tooltip>

      <ConfirmDialog
        open={open}
        close={handleClose}
        confirm={handleDelete}
        message={"¿Estás seguro de que deseas eliminar estos usuarios?"}
        title={"Confirmación de eliminar"}
      />
    </div>
  );
};
export const BasicTable = ({ data, columns, options }) => {
  const defaultOptions = {
    ...options,
    rowsPerPage: 15,
    textLabels: {
      body: {
        noMatch: "No se encontraron registros",
        toolTip: "Ordenar",
      },
      pagination: {
        next: "Siguiente página",
        previous: "Página anterior",
        rowsPerPage: "Filas por página:",
        displayRows: "de",
      },
      toolbar: {
        search: "Buscar",
        downloadCsv: "Descargar CSV",
        print: "Imprimir",
        viewColumns: "Ver columnas",
        filterTable: "Filtrar tabla",
        selectedRows: {
          text: "Fila(s) seleccionadas",
          delete: "Eliminar",
        },
      },
      selectedRows: {
        text: "fila(s) seleccionada(s)",
      },
      viewColumns: {
        title: "Mostrar columnas",
      },
      filter: {
        title: "FILTRAR",
        all: "Todos",
      },
    },

    customToolbarSelect: (selectedRows) => (
      <CustomToolbarSelect selectedRows={selectedRows} />
    ),
  };

  return (
    <MUIDataTable data={data} columns={columns} options={defaultOptions} />
  );
};
