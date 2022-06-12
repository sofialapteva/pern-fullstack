require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const PORT = process.env.PORT || 5000;
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes");
const app = express();
app.use(cors());
app.use("/api", router);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log("Running on port " + PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
