import express from "express";
import { config } from "dotenv";
import sequelize from "./lib/database.ts";
import bookRoutes from "./routes/book.route.ts";
import bodyParser from "body-parser";
import healthRoutes from "./routes/health.route.ts";

config();

const PORT = process.env.APP_PORT;

const main = async () => {
  const server = express();
  server.use(bodyParser.json());

  server.use("/health", healthRoutes);
  server.use("/books", bookRoutes);

  try {
    await sequelize.authenticate();
    await sequelize.sync({
      alter: true,
      force: false,
    });
    server.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  } catch (error) {
    console.log("Could not start the server");
    console.log(error);
  }
};

main();
