import express from "express";

const router = express.Router();

import { getEstadisticaGet, getEstadisticaPost } from "../controllers/getEstadistica.js";

import { getElementGet, getElementPost } from "../controllers/getElement.js";

router.get("/estadistica", getEstadisticaGet);

router.post("/estadistica", getEstadisticaPost);

router.get("/documento/:titulo", getElementGet);

router.post("/documento/:titulo", getElementPost);

export default router;
