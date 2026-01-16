import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import connectDB from "./config/db";
import signupRoute from "./routes/signup";
import loginRoute from "./routes/login";
import viewcapsuleRoute from "./routes/viewcapsule";
import createcapsuleRoute from "./routes/createcapsule";

const app = express();
const port = 3000;

app.use(cors());

app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE,OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

connectDB();

app.use("/api/signup", signupRoute);
app.use("/api/login", loginRoute);
app.use("/api/viewcapsule", viewcapsuleRoute);
app.use("/api/createcapsule", createcapsuleRoute);

app.get("/", (_req, res) => {
  res.send("Server running 🚀");
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
