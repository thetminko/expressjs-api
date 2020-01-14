import { Router, Request, Response } from 'express';

const router: Router = Router();

router.use('/', async (req: Request, res: Response) => {
  res.json('Hello World!');
});

export { router as meController };
