import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    const connection = await mongoose.connect(mongoURI);

    console.log("");
    console.log("==========================================");
    console.log("        MONGODB CONNECTION");
    console.log("==========================================");
    console.log(`Database: ${connection.connection.name}`);
    console.log(`Host: ${connection.connection.host}`);
    console.log("Status: Connected");
    console.log("==========================================");
    console.log("");

    return connection;
  } catch (error) {
    console.error("");
    console.error("==========================================");
    console.error("        MONGODB CONNECTION ERROR");
    console.error("==========================================");
    console.error(error.message);
    console.error("==========================================");
    console.error("");

    throw error;
  }
};

export default connectDB;