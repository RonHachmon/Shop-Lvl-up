import { Router } from 'express';
import product_task from './product_tasks';

const router = Router();

router.use('/product', product_task);

export default router;
