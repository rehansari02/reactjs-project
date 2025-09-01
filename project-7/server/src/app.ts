import express from "express";
import createHttpError from "http-errors";
import exampleRoute from "./routes/exampleRoutes";
import userRoute from "./routes/userRoutes";
import mongoose from "mongoose";
import { DB, PORT, FRONTEND_URL } from "./config";
import { errorHandler } from "./middleware/errorHanlder";
import passport from "passport";
import kPassport from "./middleware/passport";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

// Load .env variables
dotenv.config();

const app = express();

// ✅ Middlewares
app.use(
  cors({
    origin: [FRONTEND_URL || "http://localhost:3000"], // fallback for dev
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// ✅ Passport
app.use(passport.initialize());
kPassport(passport);

// ✅ Routes
app.use("/", exampleRoute);
app.use("/user", userRoute);

// ✅ Not Found Route
app.use(() => {
  throw createHttpError(404, "Route not found");
});

// ✅ Error Handler
app.use(errorHandler);

// ✅ DB Connection & Server Start
mongoose
  .connect(DB)
  .then(() => {
    console.log("✅ Connected to db");
    app.listen(PORT, () => {
      console.log(`🚀 Listening on PORT ${PORT}`);
    });
  })
  .catch(() => {
    throw createHttpError(501, "Unable to connect to database");
  });
