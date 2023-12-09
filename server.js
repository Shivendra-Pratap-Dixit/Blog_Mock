const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors"); // Add CORS middleware
const connectDB = require("./config/db");

// dotenv config
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors()); // Enable CORS for all routes

// routes
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));

// port
const port = process.env.PORT || 8080;

// listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on port ${process.env.PORT}`
  );
});
