import {NextFunction} from "express";
import {IWorkLenzRequest} from "../interfaces/taskeye-request";
import {IWorkLenzResponse} from "../interfaces/taskeye-response";

export default function (req: IWorkLenzRequest, res: IWorkLenzResponse, next: NextFunction) {
  // Map string[] -> Array<{ id: string; }>
  req.body.tasks = req.body.tasks.map((id: string) => ({id}));
  return next();
}
