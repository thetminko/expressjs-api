import { Sequelize } from 'sequelize-typescript';
import allEntities from '../entity';

let sequelize = undefined;

const dbInit = async (): Promise<void> => {
  // TODO add db connection
  sequelize = new Sequelize({
    dialect: 'mysql',
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    models: allEntities
  });

  await sequelize.sync({ force: true });

  await sequelize.authenticate();
};

export { dbInit };
export default sequelize;
