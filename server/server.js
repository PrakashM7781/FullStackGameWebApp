import express from "express";
import cors from "cors";
import morgan from "morgan";

import connect from "./connection/connection.js";
import router from "./router/route.js";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

app.use("/api", router);
const port = 8080;

//routes
app.get("/", (req, res) => {
  res.status(201).json("Hello GET Request");
});

/**Start Server When mongodb is connected */

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server Connected to ${port}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid Database Connection");
  });
