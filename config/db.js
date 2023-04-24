import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log(`DB Connected to ${conn.connection.host}`.bgMagenta.black);
  } catch (err) {
    console.log(`Error in MongoDB ${err}`.bgRed.blue);
  }
};

export default connectDB;
