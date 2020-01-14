import { LoginReq, UserDTO } from '../dto';
import { userService, cryptoService } from '.';
import { User } from '../entity';
import { UserStatus } from '../enum';
import { UnAuthorizedError } from '../error/checked';

class AuthService {

  constructor() {
    // 
  }

  login = async (loginReq: LoginReq): Promise<void> => {
    try {
      const { email, password } = loginReq;
      const user = await userService.findByEmail(email);

      const hashed = await cryptoService.hash(password);

      if (hashed === user.password) {

      }

    } catch (err) {
      throw err;
    }
  };

  userStatusCheck = (user: User | UserDTO): void => {
    let msg = '';
    switch (user.status) {
      case UserStatus.NEW:
        msg = 'User has not completed the account setup!';
        break;
      case UserStatus.PENDING_EMAIL_VERIFICATION:
        msg = 'User has not completed email verification!';
        break;
      case UserStatus.INACTIVE:
        msg = 'User is inactive!';
        break;
      case UserStatus.BLACKLIST:
        msg = 'User is blacklisted!';
        break;
      default:
        break;
    }

    if (msg) {
      throw new UnAuthorizedError(msg);
    }
  };

}

const authService = new AuthService();

export default authService;
