import { Router, Request, Response, NextFunction } from 'express';
import projectRouter from './routes/project.router';

const router = Router();

function errorHandler (err: any, req: Request, res: Response, next: NextFunction) {
    res.status(500).render('error', { error: err })
}

router
    .get('/', (req, res)=> {
        res.send('API Base - Schema goes here')
    })

router.use("/projects", projectRouter);
router.use(errorHandler)

export default router