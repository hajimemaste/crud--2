import { Request, Response } from "express";
import { Error, Document } from "mongoose";
import User from "../models/user";

class UserController {
  async index(req: Request, res: Response) {
    try {
      const users = await User.find({});
      res.status(200).json({ users: users });
    } catch (err) {
      res.status(500).json({ message: "Err" });
    }
  }

  async show(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const user = await User.findById(id);
      res.status(200).json({ user: user });
    } catch (err) {
      res.status(500).json({ message: "Err" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      let usernew = new User({ name: req.body.name, email: req.body.email });
      usernew.save();
      res.status(200).json({ usernew });
    } catch (err) {
      res.status(500).json({ message: "Err" });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      let user = await User.findByIdAndDelete({ _id: req.params.id });
      res.status(200).json({ user: user });
    } catch (error) {
      res.status(500).json({ message: "Err" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let id = req.body.id;
      let name = req.body.name;
      let email = req.body.email;
      let user = await User.findByIdAndUpdate(id, { name: name, email: email });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Err" });
    }
  }
}

export default new UserController();
