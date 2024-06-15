import {Router} from 'express';
import { Delete,  Post, Update, get,   gets } from '../controlador/CargosTecnico/CargoTecnico';

const router = Router();

router.get('/CargoTecnico' , gets);
router.get('/CargoTecnico/:id' , get);
router.delete('/CargoTecnico/:id', Delete);
router.post('/CargoTecnico/',Post);
router.put('/CargoTecnico/:id',Update);

export default router;