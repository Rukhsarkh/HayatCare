import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ override: true });

const mongoURI = process.env.mongoURI;

mongoose.connection.on("connected", () => console.log("connected"));
mongoose.connection.on("open", () => console.log("open"));
mongoose.connection.on("disconnected", () => console.log("disconnected"));
mongoose.connection.on("reconnected", () => console.log("reconnected"));
mongoose.connection.on("disconnecting", () => console.log("disconnecting"));
mongoose.connection.on("close", () => console.log("close"));

const mongoDBConnect = async () => {
  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`connection host : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error ${error.message}`);
    process.exit(1); // immediately stops the node.js process on failure
  }
};

export default mongoDBConnect;
