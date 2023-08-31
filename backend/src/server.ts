import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import userRouter from "./routers/user.router";

import { dbco } from "./configs/database.config";
import { error, log } from "console";
dbco();

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.use("/api", userRouter);

const port: number = 9999;
app.listen(port, () => {
    try {log("Website served on http://localhost:" + port)} catch (err) {error("Server error: ", err)}
});