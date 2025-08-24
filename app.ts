import express from "express";
import { config } from "dotenv";
import sequelize from "./lib/database.ts";
import healthRoutes from "./routes/health.route.ts";

config();

const PORT = process.env.APP_PORT;

const main = async () => {
  const server = express();

  server.use("/health", healthRoutes);

  try {
    await sequelize.authenticate();
    server.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  } catch (error) {
    console.log("Could not start the server");
    console.log(error);
  }
};

main();
