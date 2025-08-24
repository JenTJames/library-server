import { Router } from "express";
import { createBook, getBooks } from "../controllers/book.ts";

const router = Router();

router.get("", getBooks);

router.post("", createBook);

export default router;
