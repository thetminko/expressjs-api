import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import { protectedController } from './controller/protected';
import { publicController } from './controller/public';
import { dbInit } from './sequelize';
import { authenticationHandler, errorHandler } from './middlewares/handlers';

const apiInit = (): void => {
  const app: Application = express();

  app.use(helmet);

  app.use(cors);

  app.use('/api', publicController);

  app.use(authenticationHandler);

  app.use('/api/protected', protectedController);

  app.use(errorHandler);

  app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('App started!');
  });
};

const appStartUp = async (): Promise<void> => {
  try {
    dotenv.config();
    await dbInit();
    apiInit();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

// Start application
appStartUp();
