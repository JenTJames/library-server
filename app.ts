import express from "express";
import { config } from "dotenv";

config();

const PORT = process.env.APP_PORT;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
