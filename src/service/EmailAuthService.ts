import { EmailLoginReq, UserDTO } from '../dto';
import { User } from '../entity';
import { UserStatus } from '../enum';
import { UnAuthorizedError } from '../error/checked';

class EmailAuthService {

  login = async (loginReq: EmailLoginReq): Promise<void> => {
    // 
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

export default EmailAuthService;
