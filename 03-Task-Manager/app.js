const connectDB = require("./db/connect");
require("dotenv").config();
const express = require("express");

const app = express();

const taskRouter = require("./routers/tasksRouter");

app
  //front end
  .use(express.static("./public"))

  //middleware

  .use([express.urlencoded({ extended: false }), express.json()])

  //routers
  .use("/api/v1/tasks", taskRouter);

//connect to DB server
// then start to app as successful connection

const connect = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    //listener

    app.listen(3000, () => console.log("listening @ 3000"));
  } catch (err) {
    console.log(err);
  }
};

connect();
