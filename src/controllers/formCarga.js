import { Trabajo, Categoria } from "../models/index.js";
import { $createFriendlyUrl } from "../functions/index.js";

const formCargaGet = (req, res) => {
  res.render("formCarga/formCarga", {});
};

const formCargaPost = async (req, res) => {
  console.log(req.body);
  const {
    categoria,
    titulo,
    descripcion,
    nombreAutor,
    apellidoAutor,
    cedulaAutor,
    emailAutor,
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
    !filename ||
    !emailAutor
  ) {
    return res.status(400).json({ error: "Todos los campos son necesarios" });
  }

  try {
    const trabajoExistente = await Trabajo.findOne({
      where: { titulo, cedulaAutor },
    });

    if (trabajoExistente) {
      return res.status(400).json({ error: "Trabajo duplicado" });
    }

    const url = $createFriendlyUrl(titulo);

    await Trabajo.create({
      categoria,
      titulo,
      url,
      descripcion,
      nombreAutor,
      apellidoAutor,
      cedulaAutor,
      emailAutor,
      rutaPDF: filename,
      userAgent,
    });

    // Crear un objeto con la categoría a incrementar
    let incrementObject = {};
    incrementObject[categoria] = 1;
    incrementObject["total"] = 1; // Incrementar el campo 'total'

    // Asegurarse de que exista al menos un registro en la tabla 'categorias'
    const categoriaExistente = await Categoria.findOne();

    if (categoriaExistente) {
      await Categoria.increment(incrementObject, { where: {} });
    } else {
      // Crear un nuevo registro en la tabla 'categorias' si no existe ninguno
      await Categoria.create(incrementObject);
    }

    res.status(200).json({ message: "Trabajo cargado exitosamente" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Hubo un error al cargar el trabajo", error });
  }
};

export { formCargaGet, formCargaPost };
