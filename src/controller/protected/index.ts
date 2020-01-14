import { Router } from 'express';
import { meController } from './MeController';

const router: Router = Router();

router.use('/me', meController);

export { router as protectedController };
