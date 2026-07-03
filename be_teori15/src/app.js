import express from "express";
import allRoutes from "./routes/api.js";
import cors from "cors";

const app = express();

// Simple CORS for all origins
app.use(cors());
app.use(express.json());

app.use("/api", allRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

export default app;
