import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, 
  {
    useNewUrlParser: true,
    newUnifiedTopology: true,
  })
  .then(() => console.log("Connected Successfully"))
  .catch((err) => console.error(err));
