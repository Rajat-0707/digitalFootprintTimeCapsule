import User from "../models/user";
import express from "express";
import bcrypt from "bcryptjs";


const router=express.Router();

router.post("/", async (req: express.Request, res: express.Response) => {
    try{
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
   
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  }catch(error){
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error", error: error instanceof Error ? error.message : "Unknown error" });
  }
});

export default router;
