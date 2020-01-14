import { Table, Model, CreatedAt, UpdatedAt, DeletedAt, Column, DataType, Index, HasMany } from 'sequelize-typescript';
import { Gender, UserStatus } from '../enum';
import UserDeviceInfo from './UserDeviceInfo';

@Table({
  charset: 'utf16',
  freezeTableName: true
})
class User extends Model<User> {

  @Index('User_uuid_idx')
  @Column({ type: DataType.STRING, unique: true })
  uuid: string;

  @Index('User_email_idx')
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @Column({ type: DataType.STRING })
  aliasName: string;

  @Column({
    type: DataType.ENUM(
      Gender.Male,
      Gender.Female
    ), defaultValue: Gender.Male
  })
  gender: Gender;

  @Column({
    type: DataType.ENUM(
      UserStatus.NEW,
      UserStatus.ACTIVE,
      UserStatus.INACTIVE,
      UserStatus.BLACKLIST
    ), defaultValue: UserStatus.NEW
  })
  status: UserStatus;

  @Column({ type: DataType.STRING })
  password: string;

  @Column({ type: DataType.STRING })
  passwordHistory: string;

  @Column({ type: DataType.DATE })
  passwordLastUpdateAt: Date;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  forcePasswordChange: boolean;

  @HasMany(() => UserDeviceInfo, 'userId')
  userDeviceInfo: UserDeviceInfo[];

}

export default User;
