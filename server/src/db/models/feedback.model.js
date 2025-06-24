import mongoose from "mongoose";


// Define the structure of my data : schema 
const feedbackSchema = new mongoose.Schema(
    {
       name : {type: String , required: true},
       message: {type: String , required: true}
    },

    {timestamps : true}   // createdAt , updatedAt all will be include in it
);

// This  will create a model from that schema/structure

export const Feedback = mongoose.model("Feedback", feedbackSchema);

// Creates a collection named feedbacks in your MongoDB database.

// Note: Mongoose pluralizes the model name 
// (Feedback → feedbacks)

// Now you can use Feedback to:

// Add new feedback

// Find feedback

// Delete/update feedback