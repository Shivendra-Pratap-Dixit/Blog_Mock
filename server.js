const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");


dotenv.config();


connectDB();


const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors()); 

app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));


const port = process.env.PORT || 8080;


app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on port ${process.env.PORT}`
  );
});
