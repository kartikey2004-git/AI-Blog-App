import express from "express";
import "dotenv/config";
import connectDB from "./config/database.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middleware/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import blogRouter from "./routes/blog.routes.js";
import aiRouter from "./routes/ai.routes.js";

const app = express();
connectDB();

// Returns middleware that only parses json upto limit 16kb
app.use(express.json({ limit: "16kb" }));

// API agar koi form-data type ka payload receive kare toh usse parse karke req.body me dal de

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// agar client (browser ya Postman) apni request ke sath cookies bhejta hai, toh Express automatically unhe req.cookies object me available kara dega.

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URI,
    credentials: true,
  })
);

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev")); // HTTP request logger
}

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working fine",
    environment: process.env.PORT,
  });
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
app.use("/api/ai", aiRouter);

app.use(errorMiddleware);
