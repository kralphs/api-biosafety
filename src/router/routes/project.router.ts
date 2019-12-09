import { Router } from 'express';
import Project from '../../models/project.model'
import { runInNewContext } from 'vm';

const router = Router();

router
  .route('/')
  .get((req, res, next) => {
    const { query } = req;
    const { fields = null } = query;
    const { limit = 200 } = query;
    const { skip = 0 } = query;
    delete query.fields
    delete query.limit
    delete query.skip
    let projection;

    if (fields) {
      projection = fields.replace(/,/g, ' ');
    }

    Project.find(query, projection, {limit: +limit, skip: +skip}, (err, projects) => {
      if (err) {
        return next(err)
      }
      res.send({data: projects});
    });

  })
  .post( async (req, res, next) => {
    const project = new Project(req.body)

    await project.save((err, project) => {
      if (err) {
        return next(err)
      }
      res.status(201).send({data: project})
    })
  })

router.route('/:id')
  .get((req, res, next) => {
    Project.findById(req.params.id, (err, project) => {
      if (err) {
        return next(err)
      }
      if (project) {
        return res.send({data: project})
      }
      res.sendStatus(404)
    })
  })
  .put((req, res, next)=> {
    const project = new Project(req.body)
    if (req.params.id != project['_id']) {
      return res.sendStatus(400)
    }  

    Project.findOneAndReplace({_id: req.params.id}, project, (err, project) => {
      if (err) {
        return next(err)
      }
      res.send({data: project})
    })
  })
  .patch( async (req, res, next) => {
    if (req.body['_id']) {
      delete req.body['_id']
    }

    Project.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}, (err, project) => {
      if (err) {
        return next(err)
      }
      res.sendStatus(204)
    })
  })
  .delete((req, res, next) => {
    Project.findByIdAndRemove(req.params.id, (err, project) => {
      if (err) {
        return next(err)
      }
      res.sendStatus(204)
    })
  })
export default router