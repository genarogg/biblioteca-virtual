import { Trabajo, Categoria } from "../models/index.js";

const getEstadisticaGet = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();

    const categoria = categorias[0].dataValues;
    const total = categoria.total;

    const porcentajes = {};

    for (let key in categoria) {
      if (typeof categoria[key] === "number" && key !== "total") {
        porcentajes[key] = Math.round((categoria[key] / total) * 100);
      }
    }

    res.status(200).json(porcentajes);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Hubo un error al obtener los trabajos", error });
  }
};

const getEstadisticaPost = async (req, res) => {};

export { getEstadisticaGet, getEstadisticaPost };
