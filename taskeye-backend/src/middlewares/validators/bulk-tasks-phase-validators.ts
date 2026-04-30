import {NextFunction} from "express";

import {IWorkLenzRequest} from "../../interfaces/taskeye-request";
import {IWorkLenzResponse} from "../../interfaces/taskeye-response";
import {ServerResponse} from "../../models/server-response";

export default function (req: IWorkLenzRequest, res: IWorkLenzResponse, next: NextFunction): IWorkLenzResponse | void {
  const {phase_id, tasks} = req.body;
  if (!phase_id || !Array.isArray(tasks))
    return res.status(400).send(new ServerResponse(false, null));

  return next();
}
