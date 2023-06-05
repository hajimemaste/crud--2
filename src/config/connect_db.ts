import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://hungdd0505:nhtd051199@manegeuser.xfkolbr.mongodb.net/"
    );
    console.log("DB connected okiii!!");
  } catch (error) {
    console.log("DB connect fail !!");
  }
}
