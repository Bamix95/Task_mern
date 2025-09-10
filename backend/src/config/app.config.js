import { getEnv } from "../utils/getEnv.js";

export const appConfig = () => ({
  NODE_ENV: getEnv("NODE_ENV", "development"),
  PORT: getEnv("PORT", 5000),
  BASE_PATH: getEnv("BASE_PATH", "/api"),

  // Database
  MONGO_URL: getEnv("MONGO_URL", ""),

  // Session
  SESSION_SECRET: getEnv("SESSION_SECRET"),
  SESSION_EXPIRES_IN: getEnv("SESSION_EXPIRES_IN", "1d"),

  // Google OAuth
  GOOGLE_CLIENT_ID: getEnv("GOOGLE_CLIENT_ID"),
  GOOGLE_CLIENT_SECRET: getEnv("GOOGLE_CLIENT_SECRET"),
  GOOGLE_CALLBACK_URL: getEnv("GOOGLE_CALLBACK_URL"),

  // Frontend
  FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN", "http://localhost:5173"),
  FRONTEND_GOOGLE_CALLBACK_URL: getEnv(
    "FRONTEND_GOOGLE_CALLBACK_URL",
    "http://localhost:5173/"
  ),
});

export const config = appConfig();
