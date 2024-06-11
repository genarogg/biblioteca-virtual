import { Trabajo } from "../models/index.js";

const getElementGet = async (req, res) => {
  const { titulo } = req.params;

  if (titulo) {
    const trabajo = await Trabajo.findOne({
      where: { rutaPDF: titulo + ".pdf" },
    });

    if (trabajo) {
      res.json(trabajo);
    } else {
      res.status(404).json({ error: "Trabajo no encontrado" });
    }
  }
};

const getElementPost = async (req, res) => {};

export { getElementGet, getElementPost };
