import Project from '../models/project.model';
import { Request, Response, NextFunction } from 'express';

export default class ProjectController {
  static getProjects(req: Request, res: Response, next: NextFunction) {
    const { query } = req;
    const { $fields = null } = query;
    const { $limit = 200 } = query;
    const { $skip = 0 } = query;
    let projection;

    if ($fields) {
      projection = $fields.replace(/,/g, ' ');
    }

    Project.find(
      query,
      projection,
      { limit: +$limit, skip: +$skip },
      (err, projects) => {
        if (err) {
          return next(err);
        }
        res.send({ data: projects });
      }
    );
  }

  static async addProject(req: Request, res: Response, next: NextFunction) {
    const project = new Project(req.body);

    await project.save((err, project) => {
      if (err) {
        return next(err);
      }
      res.status(201).send({ data: project });
    });
  }

  static getProjectById(req: Request, res: Response, next: NextFunction) {
    Project.findById(req.params.id, (err, project) => {
      if (err) {
        return next(err);
      }
      if (project) {
        return res.send({ data: project });
      }
      res.sendStatus(404);
    });
  }

  static replaceProjectById(req: Request, res: Response, next: NextFunction) {
    const project = new Project(req.body);
    if (req.params.id != project['_id']) {
      return res.sendStatus(400).send('IDs do not match');
    }

    Project.findByIdAndUpdate(
      req.params.id,
      project,
      { omitUndefined: true },
      (err, project) => {
        if (err) {
          return next(err);
        }
        return res.send({ data: project });
      }
    );
  }

  static updateProjectById(req: Request, res: Response, next: NextFunction) {
    if (req.body['_id']) {
      delete req.body['_id'];
    }

    Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { runValidators: true },
      (err, project) => {
        if (err) {
          return next(err);
        }
        res.sendStatus(204);
      }
    );
  }

  static removeProjectById(req: Request, res: Response, next: NextFunction) {
    Project.findByIdAndRemove(req.params.id, (err, project) => {
      if (err) {
        return next(err);
      }
      if (project) {
        return res.sendStatus(204);
      }
      res.sendStatus(404);
    });
  }
}
