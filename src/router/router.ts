import { Router } from 'express';
import projectRouter from './routes/project.router';

const router = Router();

router
    .get('/', (req, res)=> {
        res.send('API Base - Schema goes here')
    })

router.use("/projects", projectRouter);

export default router