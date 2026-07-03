import { Sequelize } from "sequelize";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === "production";

let sequelize;

if (isProduction && process.env.DB_HOST) {
  // MySQL for production - SIMPLE CONFIG
  sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false,
    pool: {
      max: 3,
      min: 1,
      acquire: 30000,
      idle: 10000
    }
  });
  console.log("✓ Sequelize configured for MySQL production");
  console.log(`  Host: ${process.env.DB_HOST}`);
  console.log(`  Database: ${process.env.DB_NAME}`);
} else {
  // SQLite for development
  const dbPath = path.join(__dirname, "../../data/database.sqlite");
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: dbPath,
    logging: false,
  });
  console.log("✓ Sequelize configured for SQLite development");
}

export default sequelize;
