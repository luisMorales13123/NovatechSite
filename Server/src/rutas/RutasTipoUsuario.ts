import {Router} from 'express';
import { DeleteUsuario, PostUsuario, UpdateUsuario, getUsuario, getUsuarios } from '../controlador/TipoUsuario/TipoUsuario';
import validateToken from './Validate-Token';

const router = Router();


//Usuarios
router.get('/usuarios' ,validateToken , getUsuarios);
router.get('/usuarios/:id', getUsuario);
router.delete('/usuarios/:id', DeleteUsuario);
router.post('/usuarios', PostUsuario);
router.put('/usuarios/:id', UpdateUsuario);

export default router;