import {NextFunction} from "express";

import {IWorkLenzRequest} from "../../interfaces/taskeye-request";
import {IWorkLenzResponse} from "../../interfaces/taskeye-response";
import {ServerResponse} from "../../models/server-response";

export default function (req: IWorkLenzRequest, res: IWorkLenzResponse, next: NextFunction): IWorkLenzResponse | void {
  if (!req.params.id)
    return res.status(400).send(new ServerResponse(false, null));

  if (!req.body.length)
    return res.status(400).send(new ServerResponse(false, null, "Tasks are required!"));

  return next();
}
