import { Router } from "express";
import { checkHealth } from "../controllers/health.ts";

const router = Router();

router.get("/:id", checkHealth);

export default router;
