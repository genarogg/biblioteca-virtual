import { DataTypes } from "sequelize";
import sequelize from "../config/configDB.js";

const Categoria = sequelize.define(
  "Categoria",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    trabajoGradoPregrado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    produccionesIntelectualesDiep: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    publicaciones: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    diplomadosPregrado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    diplomadosPostgrado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    diplomadosUnidadesAnexas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    // Opciones del modelo
    tableName: "categorias",
  }
);

export default Categoria;
