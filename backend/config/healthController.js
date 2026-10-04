import mongoose from "mongoose";

const getHealth = async (req, res) => {
  try {
    const databaseState = mongoose.connection.readyState;

    const databaseStatus = {
      0: "disconnected",
      1: "connected",
      2: "connecting",
      3: "disconnecting"
    };

    const currentStatus = databaseStatus[databaseState];

    const isDatabaseHealthy = databaseState === 1;

    res.status(isDatabaseHealthy ? 200 : 503).json({
      success: isDatabaseHealthy,
      service: "Dashavatara Backend",
      server: "healthy",
      database: currentStatus,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to check database health",
      error: error.message
    });
  }
};

export { getHealth };