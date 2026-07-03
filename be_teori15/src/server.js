import app from "./app.js";
import "dotenv/config";
import sequelize from "./config/database.js";

const PORT = process.env.PORT || 3000;

let dbInitialized = false;

const initializeDB = async () => {
  if (dbInitialized) return;
  
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");
    await sequelize.sync();
    console.log("Database synced successfully");
    dbInitialized = true;
  } catch (error) {
    console.error("Database error:", error.message);
    console.log("Server running without database. Please check MySQL credentials in .env file");
    console.log("Expected format: DB_USER=root, DB_PASSWORD=<your_password>, DB_HOST=localhost, DB_NAME=teori15_db");
  }
};

initializeDB();

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
  console.log(`API URL: http://localhost:${PORT}/api/todos`);
});

