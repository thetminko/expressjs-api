class CryptoService {

  // TODO Update hash func
  hash = async (val: string): Promise<string> => val;

  generateJwtToken = async (payload: any): Promise<string> => 'jwt_token';

}

const cryptoService = new CryptoService();
export default cryptoService;
