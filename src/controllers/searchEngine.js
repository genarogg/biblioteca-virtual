import { Trabajo } from "../models/index.js";
import { Op } from "sequelize";

const searchEngineGet = (req, res) => {
  const { search } = req.query;

  if (search) {
    Trabajo.findAll({
      where: {
        [Op.or]: [
          { titulo: { [Op.like]: "%" + search + "%" } },
          { descripcion: { [Op.like]: "%" + search + "%" } },
          { categoria: { [Op.like]: "%" + search + "%" } },
        ],
      },
    })
      .then((trabajos) => {
        if (trabajos.length > 0) {
          res.json(trabajos);
        } else {
          res.status(404).json({ error: "No se encontraron trabajos" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: "Error al buscar trabajos" });
      });
  } else {
    res.status(400).json({ error: "No se proporcionó un término de búsqueda" });
  }
};

export { searchEngineGet };
