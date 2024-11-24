// import "dotenv/config";
// import "./config/Database";
import express from "express";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import { ensureAuthorized } from "./src/authMiddleware/authMiddleware";
import routes from "./src/AllRoutes";

const app = express();
app.use(bodyParser.json({ limit: "50MB" }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors({ origin: "*" }));

app.use("/api/v1", ensureAuthorized, routes(express));

export default app;
