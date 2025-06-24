import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import feedbackRouter from './routes/feedback.routes.js'
const app = express();


dotenv.config();


app.use(cors());
app.use(express.json()); // use to parse the incoming JSON data


// routes made in separate file

app.use("/api/feedback", feedbackRouter);


const PORT = process.env.PORT || 3000;

connectDB()
.then(() => {

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
