import { Sequelize } from 'sequelize-typescript';
import allEntities from '../entity';
import env from '../env';

let sequelize = undefined;

const dbInit = async (): Promise<void> => {
  sequelize = new Sequelize({
    dialect: 'mysql',
    database: env.dbName,
    username: env.dbUsername,
    password: env.dbPassword,
    models: allEntities
  });

  await sequelize.sync({ force: true });

  await sequelize.authenticate();
};

export { dbInit };
export default sequelize;
