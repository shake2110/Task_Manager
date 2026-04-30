import { NextFunction } from "express";

import { IWorkLenzRequest } from "../../interfaces/taskeye-request";
import { IWorkLenzResponse } from "../../interfaces/taskeye-response";
import { ServerResponse } from "../../models/server-response";

export default function (req: IWorkLenzRequest, res: IWorkLenzResponse, next: NextFunction): IWorkLenzResponse | void {
  const { attachments, task_id } = req.body;

  if (attachments.length === 0)
    return res.status(200).send(new ServerResponse(false, null, "Attachments are required!"));

  if (!task_id)
    return res.status(200).send(new ServerResponse(false, null, "Task ID is required!"));
  
  return next();
}