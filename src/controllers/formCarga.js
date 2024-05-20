import axios from "axios";
import { Trabajo, Categoria } from "../models/index.js";

const formCargaGet = (req, res) => {
  res.render("formCarga/formCarga", {});
};

const formCargaPost = async (req, res) => {
  const {
    categoria,
    titulo,
    descripcion,
    nombreAutor,
    apellidoAutor,
    cedulaAutor,
  } = req.body;
  const { filename } = req.file;
  const userAgent = req.headers["user-agent"];

  if (
    !categoria ||
    !titulo ||
    !descripcion ||
    !nombreAutor ||
    !apellidoAutor ||
    !cedulaAutor ||
    !filename
  ) {
    return res.status(400).json({ error: "Todos los campos son necesarios" });
  }

  try {
    const trabajoExistente = await Trabajo.findOne({
      where: { rutaPDF: "/uploads/" + filename, cedulaAutor },
    });

    if (trabajoExistente) {
      return res.status(400).json({ error: "Trabajo duplicado" });
    }

    await Trabajo.create({
      categoria,
      titulo,
      descripcion,
      nombreAutor,
      apellidoAutor,
      cedulaAutor,
      rutaPDF: "/uploads/" + filename,
      userAgent,
    });

    // Crear un objeto con la categoría a incrementar
    let incrementObject = {};
    incrementObject[categoria] = 1;

    // Asegurarse de que exista al menos un registro en la tabla 'categorias'
    const categoriaExistente = await Categoria.findOne();

    if (categoriaExistente) {
      await Categoria.increment(incrementObject, { where: {} });
    } else {
      // Crear un nuevo registro en la tabla 'categorias' si no existe ninguno
      await Categoria.create(incrementObject);
    }

    // Guardar la categoría en el servidor JSON
    axios
      .post(`http://localhost:8001/${categoria}`, {
        categoria,
        titulo,
        descripcion,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));

    res.status(200).json({ message: "Trabajo cargado exitosamente" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Hubo un error al cargar el trabajo", error });
  }
};

export { formCargaGet, formCargaPost };
