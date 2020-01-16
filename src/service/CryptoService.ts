class CryptoService {

  hash = (val: string): string => val;

}

const cryptoService = new CryptoService();
export default cryptoService;
