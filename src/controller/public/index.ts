import { Router } from 'express';
import { authController } from './AuthController';

const router: Router = Router();

router.use('/auth', authController);

export { router as publicController };
