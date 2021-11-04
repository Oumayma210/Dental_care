//require express
const express = require("express");
//creation of instance
const app = express();
//require connectdb
const connectDB = require("./config/db");
connectDB();
//require of dotenv
require("dotenv").config();
//creation of port
const PORT = process.env.PORT;
//middleware global
app.use(express.json());
//routes
app.use("/patient", require("./routes/patient"));
app.use("/doctor", require("./routes/doctor"));

//creation of server
app.listen(PORT, (error) => {
    error
        ? console.error(error)
        : console.log(`app is running on port :${PORT}`);
});
