import express from "express";
import { Feedback } from "../models/feedback.model.js";

const router = express.Router();

//  Server here recieve the data from body and pass it to entry point and update data in DB

router.post("/", async (req, res) => {
  try {
    const { name, message } = req.body;

    const newFeedback = new Feedback({ name, message });
    await newFeedback.save();

    res.status(201).json({ message: "Feedback submitted Successfully !!" });
  } catch (error) {
    console.error("Something went wrong", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
