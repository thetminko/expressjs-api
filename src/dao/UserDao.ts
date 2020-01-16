import { User } from '../entity';

class UserDao {

  findOneBy(where: any): Promise<User> {
    return User.findOne({ where });
  }

}

export default UserDao;
