import { UserStatus } from '../enum';

export interface LoginReq {
  email: string;
  password: string;
}

export interface UserDTO {
  uuid: string;
  email: string;
  aliasName: string;
  status: UserStatus;
}
