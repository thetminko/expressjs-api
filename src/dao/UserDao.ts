import { User } from '../entity';

class UserDao {

  findOneBy(where: any): Promise<User> {
    return User.findOne({ where });
  }

}

const userDao = new UserDao();
export default userDao;
