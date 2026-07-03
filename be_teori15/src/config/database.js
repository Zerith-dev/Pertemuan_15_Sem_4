import { Sequelize } from "sequelize";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === "production";

let sequelize;

if (isProduction && process.env.DB_HOST) {
  // MySQL for production with connection pooling
  sequelize = new Sequelize(
    process.env.DB_NAME || "railway",
    process.env.DB_USER || "root",
    process.env.DB_PASSWORD || "",
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 3306,
      dialect: "mysql",
      logging: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      dialectOptions: {
        connectTimeout: 10000,
        decimalNumbers: true
      }
    }
  );
} else {
  // SQLite for development
  const dbPath = path.join(__dirname, "../../data/database.sqlite");
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: dbPath,
    logging: false,
  });
}

export default sequelize;
