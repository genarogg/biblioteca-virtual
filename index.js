import path from "node:path";
import express from "express";

const app = express();

// Middleware para parsear el body de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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


import { homeRouter, formCargaRouter } from "./src/routers/router.js";
app.use("/", homeRouter);
app.use("/cargar-trabajo", formCargaRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
