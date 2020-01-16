import dotenv from 'dotenv';
dotenv.config();

interface AppEnv {
  dbName: string;
  dbUsername: string;
  dbPassword: string;
  jwtPublicPath: string;
  jwtPrivatePath: string;
}

let env: AppEnv;

const initEnv = (): void => {
  env = {
    dbName: process.env['db.name'],
    dbUsername: process.env['db.username'],
    dbPassword: process.env['db.password'],
    jwtPublicPath: process.env['db.jwt.public.path'],
    jwtPrivatePath: process.env['db.jwt.private.path']
  };
};

initEnv();

export default env;
