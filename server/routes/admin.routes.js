import express from 'express';
import { adminUsers } from '../controllers/admin.controller.js';

const router = express.Router();

router.get('/admin/users', async (req, res) => {
    await adminUsers(req, res, { Accion: null });
  });
  
// Ruta para la acción "C" (Crear usuario)
router.post('/admin/users', async (req, res) => {
    const { Correo, Nombre } = req.body;
    await adminUsers(req, res, { Accion: 'C', Correo, Nombre });
  });
  
// Ruta para la acción "R" (Obtener usuario por id)
router.get('/admin/users/:idUsuario', async (req, res) => {
  const { idUsuario } = req.params;
  await adminUsers(req, res, { Accion: 'R', idUsuario });
});


// Ruta para la acción "U" (Actualizar usuario)
router.put('/admin/users/:idUsuario', async (req, res) => {
  const { idUsuario } = req.params;
  const { Correo, Nombre } = req.body;
  await adminUsers(req, res, { Accion: 'U', idUsuario, Correo, Nombre });
});

// Ruta para la acción "D" (Eliminar usuario)
router.delete('/admin/users/:idUsuario', async (req, res) => {
  const { idUsuario } = req.params;
  await adminUsers(req, res, { Accion: 'D', idUsuario });
});

export default router;
