import {NextFunction} from "express";

import {IWorkLenzRequest} from "../../interfaces/taskeye-request";
import {IWorkLenzResponse} from "../../interfaces/taskeye-response";
import {ServerResponse} from "../../models/server-response";

export default function (req: IWorkLenzRequest, res: IWorkLenzResponse, next: NextFunction): IWorkLenzResponse | void {
  const {project, replace} = req.query;
  if (!project)
    return res.status(400).send(new ServerResponse(false, null));

  req.query.replace = /null/.test(replace as string) ? null : replace as any;

  return next();
}
