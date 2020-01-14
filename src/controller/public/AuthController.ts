import { Router, Request, Response } from 'express';

const router: Router = Router();

/*
* url /api/auth/login
*/
router.post('/login', async (req: Request, res: Response) => {
  res.json('Required login!');
});

/*
* url /api/auth/register
*/
router.post('/register', async (req: Request, res: Response) => {
  res.json('ok');
});

export { router as authController };
