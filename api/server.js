import express from "express";
import { connectDB } from "./src/config/connectDB.js";
import dotenv from "dotenv";
dotenv.config()
//Routes
import honadonRouter from "./src/routes/honadon.js";
import objectRouter from "./src/routes/object.js";
import binoRouter from "./src/routes/bino.js";

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/honadon", honadonRouter);
app.use("/api/object", objectRouter);
app.use("/api/bino", binoRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
