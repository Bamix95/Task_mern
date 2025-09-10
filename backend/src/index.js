import "dotenv/config";
import express, { urlencoded } from "express";
import cors from "cors";
import session from "cookie-session";
import { config } from "./config/app.config.js";
import connectDb from "./config/db.config.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import { asyncHandler } from "./middlewares/asyncHandler.middleware.js";
import { HTTPSTATUS } from "./config/http.config.js";

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

app.get(
  "/",
  asyncHandler(async (req, res) => {
    res.status(HTTPSTATUS.OK).json({ message: "Holla Amigos!" });
  })
);

app.use(errorHandler);

app.listen(config.PORT, async () => {
  console.log(`Server running on port: ${config.PORT} in ${config.NODE_ENV}`);
  await connectDb();
});
