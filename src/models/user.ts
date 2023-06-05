import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  pass: string;
  token: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String },
  email: { type: String },
  pass: { type: String },
  token: { type: String },
});

const User = model<IUser>("users", userSchema);

export default User;
