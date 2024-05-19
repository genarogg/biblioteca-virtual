import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./src/config/db.sqlite",
});

export default sequelize;
