export const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    service: "Dashavatara Backend",
    status: "healthy",
    environment: process.env.NODE_ENV || "development"
  });
};