import { User } from '../entity';
import { userDao } from '../dao';
import { EntityNotFoundError } from '../error/checked';

class UserService {

  findByEmail = async (email: string): Promise<User> => {
    const user = await userDao.findOneBy({ email });
    if (!user) {
      throw new EntityNotFoundError(`User with ${email} not found!`);
    }
    return user;
  };

}

export default UserService;

