import { UserStatus } from '../enum';

export interface EmailLoginReq {
  email: string;
  password: string;
}

export interface UserDTO {
  uuid: string;
  email: string;
  aliasName: string;
  status: UserStatus;
}
