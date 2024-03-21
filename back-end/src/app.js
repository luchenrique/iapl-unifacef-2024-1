import dotenv from "dotenv";
//Carrega as variaveis do arquivo .env dentro do objeto global process.env

import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index.js";
// import usersRouter from "./routes/users.js";

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
// app.use("/users", usersRouter);

import usersRouter from './routes/users.js'
app.use('/users', usersRouter)

export default app;
