import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import UserRoutes from "./routes/UserRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoutes);

mongoose.connect(process.env.db_host + "/" + process.env.db_name, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.on("success", console.log.bind(console, "DB connected"));

app.listen(process.env.server_port, () =>
  console.log(`Server is running on port ${process.env.server_port}`)
);
