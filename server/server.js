const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");

const { db, server } = require("./config/config");

const authRouter = require("./routes/api/auth");

const app = express();
mongoose.connect(db.uri).catch((error) => console.error(error));

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(
  cors({
    origin: [`http://localhost:${server.port}`],
    methods: "GET, POST, PUT, DELETE, PATCH",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(server.port, () => console.log("running on port ", server.port));
