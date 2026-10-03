import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log("");
      console.log("==========================================");
      console.log("        DASHAVATARA BACKEND");
      console.log("==========================================");
      console.log(`🚀 Server: http://localhost:${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
      console.log("📡 Status: Running");
      console.log("==========================================");
      console.log("");
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();