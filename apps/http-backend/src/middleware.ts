import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";

export function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"] || "";
  const decodeJwt = jwt.verify(token, JWT_SECRET);

  if (decodeJwt) {
    // @ts-ignore
    req.userId = decodeJwt.id;
    next();
  } else {
    res.status(403).json({
      message: "Unauthorized!",
    }).status;
  }
}
