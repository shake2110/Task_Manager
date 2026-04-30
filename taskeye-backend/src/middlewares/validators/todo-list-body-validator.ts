import {NextFunction} from "express";

import {IWorkLenzRequest} from "../../interfaces/taskeye-request";
import {IWorkLenzResponse} from "../../interfaces/taskeye-response";
import {ServerResponse} from "../../models/server-response";

export default function (req: IWorkLenzRequest, res: IWorkLenzResponse, next: NextFunction): IWorkLenzResponse | void {
  const {name, color_code} = req.body;
  if (!name)
    return res.status(200).send(new ServerResponse(false, null, "Name is required"));
  if (!color_code)
    req.body.color_code = "#767676";

  req.body.done = !!req.body.done;
  return next();
}
