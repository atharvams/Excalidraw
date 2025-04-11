import express from "express";
import jwt from "jsonwebtoken";
import { signUpSchema } from "@repo/common/types";
import "dotenv/config";
import { middleware } from "./middleware";

const app = express();
const jwtSecret = process.env.JWT_SECRET || "";

app.post("/signup", (req, res) => {
  //zod validation
  const verify = signUpSchema.safeParse(req.body);

  if (!verify.success) {
    res.json("Unauthorized").status(403);
    return;
  }
  //db call
  //return
  res.json({
    id: 1,
  });
});

app.post("/signin", (req, res) => {
  //zod validation

  //db call

  //jwt token
  const jwtToken = jwt.sign(
    {
      id: 1,
    },
    jwtSecret
  );
  //return
  res.json({
    id: 1,
    token: jwtToken,
  });
});

app.post("/room", middleware, (req, res) => {
  //zod validation
  //db call
  //return
  res.json({
    roomId: "abc",
  });
});

app.listen(3000, () => {
  console.log("app is listening to port 3000");
});
