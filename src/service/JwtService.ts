import jwt, { SignOptions } from 'jsonwebtoken';
import { readFileSync } from 'fs';
import env from '../env';

class JwtService {

  private readonly issuer = 'neighbourlife-api';
  private readonly signingKey = readFileSync(env.jwtPrivatePath);
  private readonly verifyKey = readFileSync(env.jwtPublicPath);
  private readonly jwtConfig: SignOptions = { algorithm: 'RS512', issuer: this.issuer };

  signJwt = async (payload: any): Promise<string> => jwt.sign({ ...payload }, this.signingKey, this.jwtConfig);

  verifyJwt = async (token: string): Promise<any> => jwt.verify(token, this.verifyKey, this.jwtConfig);

}

export default JwtService;
