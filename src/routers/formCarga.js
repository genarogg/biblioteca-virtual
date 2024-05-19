import express from "express";
import upload from "../config/multer.js";

const router = express.Router();

import { formCargaGet, formCargaPost } from "../controllers/formCarga.js";

router.get("/", formCargaGet);

router.post("/", upload.single("archivo"), formCargaPost);

export default router;
