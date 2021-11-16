//require express
const express = require("express");
//creation of instance
const app = express()
//require connectdb
const connectDB = require("./config/db");
connectDB();
const path= require('path')
//require of dotenv
require("dotenv").config();
//creation of port
const PORT = process.env.PORT;
//middleware global
app.use(express.json());
//routes
app.use("/patient", require("./routes/patient"));
app.use("/doctor", require("./routes/doctor"));
//serve static assets if in production
if (process.env.NODE_ENV==='production'){
    //set static folder
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))

    })
}
//creation of server
app.listen(PORT, (error) => {
    error
        ? console.error(error)
        : console.log(`app is running on port :${PORT}`);
});
