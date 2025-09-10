import "dotenv/config";
import express, { urlencoded } from "express";
import cors from "cors";
import session from "cookie-session";
import { config } from "./config/app.config.js";

const app = express();

const BASE_PATH = config.BASE_PATH;

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(
  session({
    name: "session",
    keys: [config.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000,
    secure: config.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
  })
);

app.use(
  cors({
    origin: config.FRONTEND_ORIGIN,
    credentials: true,
  })
);

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Holla Amigos",
  });
});

app.listen(config.PORT, async () => {
  console.log(`Server running on port: ${config.PORT} in ${config.NODE_ENV}`);
});
