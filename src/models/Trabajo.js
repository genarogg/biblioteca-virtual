import { DataTypes } from "sequelize";
import sequelize from "../config/configDB.js"; // Asegúrate de importar tu conexión a Sequelize

const Trabajo = sequelize.define(
  "Trabajo",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nombreAutor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidoAutor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cedulaAutor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rutaPDF: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    downloader: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },

    userAgent: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    // Opciones del modelo
    tableName: "trabajos",
  }
);

export default Trabajo;
