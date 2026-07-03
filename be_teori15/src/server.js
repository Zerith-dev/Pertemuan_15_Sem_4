import app from "./app.js";
import "dotenv/config";
import sequelize from "./config/database.js";

const PORT = process.env.PORT || 3000;

// Start server immediately
const server = app.listen(PORT, () => {
  console.log(`✓ Server berjalan di port ${PORT}`);
  console.log(`✓ API URL: http://localhost:${PORT}/api/todos`);
  console.log(`✓ NODE_ENV: ${process.env.NODE_ENV}`);
});

// Try to connect database in background (non-blocking)
(async () => {
  try {
    console.log("🔄 Attempting database connection...");
    await sequelize.authenticate();
    console.log("✓ Database connected successfully");
    
    await sequelize.sync();
    console.log("✓ Database synced successfully");
  } catch (error) {
    console.warn("⚠️  Database error:", error.message);
    console.warn("⚠️  Server running without database connection");
    console.warn(`Expected: DB_HOST=${process.env.DB_HOST}, DB_USER=${process.env.DB_USER}, DB_NAME=${process.env.DB_NAME}`);
  }
})();

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});

