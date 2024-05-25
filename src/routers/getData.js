import express from "express";

const router = express.Router();

import { getEstadisticaGet, getEstadisticaPost } from "../controllers/getEstadistica.js";

router.get("/estadistica", getEstadisticaGet);

router.post("/estadistica", getEstadisticaPost);

export default router;
