import {Router} from 'express';
import { PostUsuario } from '../controlador/VistaUsuario/vistaUsuario';


const router = Router();


router.post('/AgregarVistaUsuario/',PostUsuario);




export default router;