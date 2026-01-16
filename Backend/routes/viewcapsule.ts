/// <reference path="../types/express.d.ts"/>
import express, { Request, Response } from "express";
import authMiddleware from "../middleware/auth";
import User from "../models/user";
import Capsule from "../models/capsule";

const router = express.Router();

router.get("/", authMiddleware, async (req: Request, res: Response) => {

    try{
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ capsules: await Capsule.find({ userId: user._id }) });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;



