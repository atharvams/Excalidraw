import jwt from "jsonwebtoken";
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });
const JWT_SECRET = process.env.JWT_SECRET || "";

wss.on("connection", function connection(ws, request) {
  const url = request.url;

  if (!url) {
    ws.close();
    return;
  }

  const searchParam = new URLSearchParams(url.split("?")[1]);
  const token = searchParam.get("token") || "";
  const verifyJwt = jwt.verify(token, JWT_SECRET);

  if (!verifyJwt) {
    ws.close();
    return;
  }

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("%s", data);
    ws.send("pong");
  });
  ws.send("connected!");
});
