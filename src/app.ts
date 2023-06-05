import express from "express";
import indexRouters from "./router/index";
import userRouter from "./router/user";
import bodyParser from "body-parser";
import { connect } from "./config/connect_db";

const app = express();

// connect db
connect();

// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

//config router
app.use("/users", userRouter);
app.use("/", indexRouters);

app.listen(3000, () => {
  console.log("server is running http://localhost:3000/");
});
