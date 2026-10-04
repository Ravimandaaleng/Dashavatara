import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";
import setupDatabaseEvents from "./config/dbEvents.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    setupDatabaseEvents();

    await connectDB();

    app.listen(PORT, () => {
      console.log("");
      console.log("==========================================");
      console.log("        DASHAVATARA BACKEND");
      console.log("==========================================");
      console.log(`🚀 Server: http://localhost:${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
      console.log("🗄️ Database: Connected");
      console.log("📡 Status: Running");
      console.log("==========================================");
      console.log("");
    });
  } catch (error) {
    console.error("");
    console.error("==========================================");
    console.error("        SERVER STARTUP FAILED");
    console.error("==========================================");
    console.error(error.message);
    console.error("==========================================");

    process.exit(1);
  }
};

startServer();