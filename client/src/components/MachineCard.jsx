import { useNavigate } from "react-router-dom";
import { useMachines } from "../context/Machines.context";
import {
  Card,
  CardContent,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

function MachineCard({ machine }) {
  const { deleteMachine } = useMachines();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    deleteMachine(machine.idMaquina);
    handleClose();
  };
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h1">{machine.Maquina}</Typography>
          <Typography variant="h3">{machine.Modelo}</Typography>

          <Typography variant="h4">
            {machine.NoSerie ? `Número de serie: ${machine.NoSerie}` : ""}
          </Typography>

          <div>Planta: {machine.Planta}</div>
          <span>Proceso: {machine.Proceso}</span>
          <span> Ubicación: {machine.Ubicacion}</span>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
            }}
          >
            <IconButton color="error" onClick={handleOpen}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => navigate(`/edit/${machine.idMaquina}`)}>
              <EditIcon />
            </IconButton>
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmar Eliminación</DialogTitle>
        <DialogContent>
          <p>¿Estás seguro de que deseas eliminar esta máquina?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="neutral">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="error">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MachineCard;
