import { logged } from "../services/server";
import { NextFunction,Request,Response } from "express";



export const auth = (req: any, res: Response, next : NextFunction) => {
    if (req.session.nombre = logged.nombre) {
        return next()
    } else {
        return res.sendStatus(401);
    }
} 