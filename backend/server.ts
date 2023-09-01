import db from './db';
import { initModels } from './models';
import express from "express";
import cors from "cors";
import userRouter from "./routers/user.router";

const app = express();
const port = 3000;
initModels(db);

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.use("/api", userRouter);

app.listen(port, () => {
    try {console.log("Website served on http://localhost:" + port)} catch (err) {console.error("Server error: ", err)}
});