import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL);

    con && console.log("Db connected");
  } catch (error) {
    console.log(error);
  }
};
