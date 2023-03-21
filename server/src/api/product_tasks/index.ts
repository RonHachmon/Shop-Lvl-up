import { Router } from 'express';
import * as taskRepo from '../../repositories/task'
const router = Router();

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const task = await taskRepo.findById(id);
    res.json(task);
});

router.get('/', async (req, res) => {
    const tasks = await taskRepo.findAll();
    res.json(tasks);
})

router.post('/', async (req, res) => {
    const { title } = req.body;
    const task = await taskRepo.create(title);
    res.json(task);
});

export default router;