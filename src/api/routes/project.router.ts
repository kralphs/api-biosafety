import { Router } from 'express';
import ProjectController from '../controllers/project.controller';

const router = Router();

router
  .route('/')
  .get(ProjectController.getProjects)
  .post(ProjectController.addProject);

router
  .route('/:id')
  .get(ProjectController.getProjectById)
  .put(ProjectController.replaceProjectById)
  .patch(ProjectController.updateProjectById)
  .delete(ProjectController.removeProjectById);
export default router;
