import { Request, Response, NextFunction } from 'express';
import { UnAuthorizedError } from '../../error/checked';
import { authService } from '../../service';
import { UserDTO } from '../../dto';
import uuid = require('uuid');

// Put in the Url path e.g. /auth/login if the path does not need to check user status handling
const userStatusCheckNotRequiredUrls = [];

// TODO, should return a decoded token if authenticated, else throw error
const isAuthenticatedCheck = (): Promise<UserDTO> => null;

const userStatusCheck = (user: UserDTO): void => authService.userStatusCheck(user);

const authenticationHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const decodedToken = isAuthenticatedCheck();

    // tmp
    const tmp = {} as UserDTO;

    if (!userStatusCheckNotRequiredUrls.indexOf(req.url)) {
      userStatusCheck(tmp);
    }

    next();

  } catch (err) {
    next(new UnAuthorizedError(err));
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = async (err: Error, req: Request, res: Response, next: NextFunction): Promise<void> => {
  // if (err.status === 404) {
  //   res.json('404!');
  // } else {
  //   res.json('500!');
  // }
};

export { authenticationHandler, errorHandler };
