import express, { Request, Response } from "express";
import authMiddleware from "../middleware/auth";
import User from "../models/user";
import Capsule from "../models/capsule";

const router = express.Router();

router.post("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const {
      title,
      message,
      openingDate,
      deleteAfterOpening,
      sendEmailNotification,
    } = req.body;

    if (!title || !message || !openingDate) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newCapsule = await Capsule.create({
      title,
      message,
      openingDate,
      deleteAfterOpening,
      sendEmailNotification,
      userId: user._id,
    });

    res.status(201).json({
      message: "Capsule created successfully",
      capsuleId: newCapsule._id,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
