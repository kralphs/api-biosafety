import express, { Router } from 'express';
import Project, { IProject } from '../../models/project.model'

const router = Router();

router
    .route('/')
    .get((req, res) => {
        const { query } = req;
        Project.find(query, (err, projects) => {
          if (err) {
            return res.send(err);
          }
          return res.json(projects);
        });
      })
      .post((req, res) => {
          const project = new Project(req.body)

          project.save()
          res.status(201).json(project)
      })

router.use('/:id', (req, res, next) => {
  Project.findById(req.params.id, (err, project) => {
    if (err) {
        return res.send(err);
    }
    if (project) {
      res.locals.project = project
      return next()
    }
    return res.sendStatus(404)
  })
})

router.route('/:id')
    .get((req, res) => {
      res.json(res.locals.project)
    })
    .patch((req, res) => {
      const project = <IProject>res.locals.project

      if (req.body['_id']) {
        delete req.body['_id']
      }

      Object.entries(req.body).forEach(item => {
        project[item[0]] = item[1]
      })
    })
export default router