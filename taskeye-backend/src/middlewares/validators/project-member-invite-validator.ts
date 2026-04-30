import {NextFunction} from "express";

import {IWorkLenzRequest} from "../../interfaces/taskeye-request";
import {IWorkLenzResponse} from "../../interfaces/taskeye-response";
import {ServerResponse} from "../../models/server-response";
import {isValidateEmail} from "../../shared/utils";

export default function (req: IWorkLenzRequest, res: IWorkLenzResponse, next: NextFunction): IWorkLenzResponse | void {
  const {project_id, email} = req.body;
  if (!project_id || !isValidateEmail(email))
    return res.status(400).send(new ServerResponse(false, null));
  return next();
}
