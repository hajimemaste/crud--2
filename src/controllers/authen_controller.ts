import { Request, Response } from "express";
import { Error, Document } from "mongoose";
import User from "../models/user";
import jwt from "jsonwebtoken";

class IndexController {
  async index(req: Request, res: Response) {
    try {
      let { email, password } = req.body;
      const user = await User.findOne({ email: email, password: password });
      console.log(user);
      if (!user) {
        return res.status(404).json({ message: "Khong tim thay user" });
      }
      let token = await jwt.sign({ email, user_id: user._id }, "authen1");
      user.token = token;
      user.save();
      res.status(200).json({ token });
    } catch (err) {
      res.status(500).json({ message: "Err" });
    }
  }
  async logout(req: Request, res: Response) {
    try {
      let tokenstring: any = req.headers.authorization;
      let verifyObj: any = await jwt.verify(tokenstring, "authen1");
      if (!verifyObj) {
        return res.status(401).json({ message: "Chua dang nhap" });
      }
      let user = await User.findById(verifyObj.user_id);
      if (!user || user.token != tokenstring) {
        return res.status(401).json({ message: "Chua dang nhap" });
      }
      user.token = "";
      await user.save();
      res.status(200).json({ message: "Da dang xuat thanh cong" });
    } catch (err) {
      res.status(500).json({ message: "Err" });
    }
  }
}

export default new IndexController();
