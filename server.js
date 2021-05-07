import express from "express";
import cors from "cors";

import todosRouter from "./routes/todos.js";
import connectDB from "./config/db.js";

// configurations
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// connect db
await connectDB();

// endpoints
app.get("/", (req, res) => res.status(200).json("Hello World!"));
app.use("/api", todosRouter);

app.listen(80, () => console.log(`Listening on localhost:${80}`));
