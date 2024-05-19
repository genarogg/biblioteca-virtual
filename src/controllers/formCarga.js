import { Trabajo } from "../models/index.js";

const formCargaGet = (req, res) => {
  res.render("formCarga/formCarga", {});
};

const formCargaPost = async (req, res) => {
  try {
    // Crear un nuevo trabajo con los datos del formulario y la ruta al archivo
    const trabajo = await Trabajo.create({
      categoria: req.body.categoria,
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      nombreAutor: req.body.nombreAutor,
      apellidoAutor: req.body.apellidoAutor,
      cedulaAutor: req.body.cedulaAutor,
      rutaPDF: "/uploads/" + req.file.filename,
    });

    res.status(200).json({ message: "Trabajo cargado exitosamente", trabajo });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hubo un error al cargar el trabajo", error });
  }
};

export { formCargaGet, formCargaPost };
