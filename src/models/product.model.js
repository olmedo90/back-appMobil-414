import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", userSchema);