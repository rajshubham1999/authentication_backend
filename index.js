const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();
const dbConfig = require("./config/dbConfig")
const PORT = process.env.PORT || 3001 

const userRoute = require("./routes/userRoutes");
app.use(cors());

app.use(express.json());
app.use('/api/user', userRoute);
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})