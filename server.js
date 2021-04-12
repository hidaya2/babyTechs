const express = require("express");

const morgan = require("morgan");

const dotenv = require("dotenv");

const connectDB = require("./config/connectDB");

const techniciansRoute = require("./routes/techniciansRoute");

dotenv.config();

const app = express();

//CONNECTION
connectDB();

//MIDDLEWARES
app.use(express.json());

app.use(morgan("dev"));

//ROUTES

app.use("/api/v6/technicians", techniciansRoute);

//HOME ROUTE

app.get("/", (req, res) => {
  res.send("<h2> This is our technicians api</h2>");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on ${port}`));
