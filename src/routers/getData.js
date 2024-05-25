import express from "express";

const router = express.Router();

import { getDataGet, getDataPost } from "../controllers/getData.js";

router.get("/", getDataGet);

router.post("/", getDataPost);

export default router;
