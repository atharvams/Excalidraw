import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";

export function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"] || "";
  const decodeJwt = jwt.verify(token, JWT_SECRET);

  if (!decodeJwt || typeof decodeJwt === "string") {
    res.status(403).json({
      message: "Unauthorized!",
    });
    return;
  }

  if (decodeJwt) {
    req.userId = decodeJwt.userId;
    next();
  } else {
    res.status(403).json({
      message: "Unauthorized!",
    });
  }
}
