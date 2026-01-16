import mongoose from "mongoose";

const capsuleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
    },
    openingDate: {
      type: Date,
      required: true,
    },
    deleteAfterOpening: {
      type: Boolean,
      default: false,
    },
    sendEmailNotification: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Capsule", capsuleSchema);