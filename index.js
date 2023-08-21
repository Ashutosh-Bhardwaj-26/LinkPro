require("dotenv").config();
require('express-async-errors');

const serverless = require("serverless-http");
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require('./db/auth');
const auth = require('./Routes/auth');
const PORT = 5004;

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
app.use(cors());
app.use(express.json());
app.use(('/api/v1'),auth);
//get Response 
app.get("/",(req,res)=>{
    const webpage = `
    <html>
    <head>
      <title>My Webpage</title>
    </head>
    <body>
      <h1>Welcome to my webpage</h1>
    </body>
    </html>
    `;
    res.send(webpage);
})

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
    try {
      // connectDB
      await connectDB(process.env.MONGO_URI);
      app.listen(PORT, () => console.log(`Server is listening port ${PORT}...`));
    } catch (error) {
      console.log(error);
    }
  };


start();