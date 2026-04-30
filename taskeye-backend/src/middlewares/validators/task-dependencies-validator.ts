import { NextFunction } from "express";

import { IWorkLenzRequest } from "../../interfaces/taskeye-request";
import { IWorkLenzResponse } from "../../interfaces/taskeye-response";
import { ServerResponse } from "../../models/server-response";

export default function (req: IWorkLenzRequest, res: IWorkLenzResponse, next: NextFunction): IWorkLenzResponse | void {
  const { example_name } = req.body;
  if (!example_name)
    return res.status(200).send(new ServerResponse(false, null, "Name is required"));
  return next();
}