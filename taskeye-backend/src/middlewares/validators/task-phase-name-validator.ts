import {NextFunction} from "express";

import {IWorkLenzRequest} from "../../interfaces/taskeye-request";
import {IWorkLenzResponse} from "../../interfaces/taskeye-response";
import {ServerResponse} from "../../models/server-response";

export default function (req: IWorkLenzRequest, res: IWorkLenzResponse, next: NextFunction): IWorkLenzResponse | void {
  const name = (req.body.name || "").trim();
  if (!name)
    return res.status(400).send(new ServerResponse(false, null, "Invalid name"));
  return next();
}
