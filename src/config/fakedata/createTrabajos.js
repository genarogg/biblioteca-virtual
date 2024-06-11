import { Trabajo } from "../../models/index.js";

const createTrabajos = async () => {
  await Trabajo.sync();
  for (let i = 0; i < 500; i++) {
    const trabajo = {
      categoria: "Categoria " + i,
      titulo: "Titulo " + i,
      descripcion: "Descripcion " + i,
      nombreAutor: "NombreAutor " + i,
      apellidoAutor: "ApellidoAutor " + i,
      emailAutor: "email" + i + "@example.com",
      cedulaAutor: (10000000 + i).toString(),
      rutaPDF: "/ruta/a/pdf" + i,
      url: "http://example.com/url" + i,
      downloader: (i % 100) + 1, // Esto dará un número entre 1 y 100
      aprobado: i % 2 === 0, // Esto alternará entre verdadero y falso
      userAgent: "UserAgent " + i,
    };

    await Trabajo.create(trabajo);
  }
};

export default createTrabajos;
