require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const fileUpload = require("express-fileupload");
const path = require("path");
const PORT = process.env.PORT || 5000;
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes");
const errorHandler = require("./middlewares/ErrorHandlingiddleware");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);
// Error handling, goes last
app.use(errorHandler);

app.get("/", (req, res) => {});

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
