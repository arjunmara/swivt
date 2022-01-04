import express from "express";
import dotenv from "dotenv";
import githubRoutes from "./routes/githubRoutes.js";
import morgan from "morgan";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/github/", githubRoutes);
app.listen(port, console.log(`App running on port ${port}`));
