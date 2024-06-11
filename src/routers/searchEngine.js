import express from "express";

const router = express.Router();

import { searchEngineGet } from "../controllers/searchEngine.js";

router.get("/", searchEngineGet);

export default router;
