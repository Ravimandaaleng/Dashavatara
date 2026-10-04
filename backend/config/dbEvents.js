import mongoose from "mongoose";

const setupDatabaseEvents = () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB event: connected");
  });

  mongoose.connection.on("error", (error) => {
    console.error("MongoDB event error:", error.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB event: disconnected");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("MongoDB event: reconnected");
  });
};

export default setupDatabaseEvents;