import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { 
    getTasks, 
    getTask, 
    createTask, 
    updateTask, 
    deleteTask,
} from '../controllers/tasks.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createTaskSchema } from '../schemas/task.chema.js';

const router = Router();

router.get('/tasks', authRequired, getTasks);
router.get('/tasks/:id', authRequired, getTask);
//ORDEN: URL, se valida que el usuario esté autenticado, 
//se valida que lo que crea es valido, se crea el task si es correcto todo
router.post(
    '/tasks', 
    authRequired, 
    validateSchema(createTaskSchema),
    createTask
);
router.delete('/tasks/:id', authRequired, deleteTask);
router.put('/tasks/:id', authRequired, updateTask);

export default router;