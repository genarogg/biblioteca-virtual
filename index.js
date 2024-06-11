import path from "node:path";
import express from "express";

const app = express();

// Middleware para parsear el body de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Habilitar CORS
import cors from "cors";
app.use(cors());

// Servir archivos estáticos desde el directorio "public"
const publicPath = path.join(process.cwd(), "./src/public");
app.use(express.static(publicPath));

// Habilitando el motor de plantillas EJS
const viewsPath = path.join(process.cwd(), "./src/views");
app.set("views", viewsPath);
app.set("view engine", "ejs");

//instancia la db
import sequelize from "./src/config/configDB.js";

sequelize.sync({ logging: false }).then(() => {
  console.log("DB conectada!");
});

import {
  homeRouter,
  formCargaRouter,
  getData,
  searchEngine,
} from "./src/routers/router.js";

app.use("/", homeRouter);
app.use("/cargar-trabajo", formCargaRouter);
app.use("/get-data", getData);
app.use("/search", searchEngine);

const PORT = process.env.PORT || 8000;

import createTrabajos from "./src/config/fakedata/createTrabajos.js";

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  createTrabajos();
});
