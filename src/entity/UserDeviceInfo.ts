import { Table, Model, Column, DataType, Index, PrimaryKey, BelongsTo } from 'sequelize-typescript';
import User from './User';

@Table({
  charset: 'utf16',
  freezeTableName: true
})
class UserDeviceInfo extends Model<UserDeviceInfo> {

  @PrimaryKey
  @Column
  userId: number;

  @Index('UserDeviceInfo_deviceUuid')
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  deviceUuid: string;

  @Index('UserDeviceInfo_accessToken')
  @Column({ type: DataType.STRING })
  accessToken: string;

  @Column({ type: DataType.DATE })
  accessTokenExpiryAt: Date;

  @Column({ type: DataType.STRING })
  fcmToken: Date;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  revoked: boolean;

  @BelongsTo(() => User, 'userId')
  user: User;

}

export default UserDeviceInfo;
