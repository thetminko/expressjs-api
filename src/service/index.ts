import CryptoService from './CryptoService';
import JwtService from './JwtService';
import UserService from './UserService';
import EmailAuthService from './EmailAuthService';

const emailAuthService = new EmailAuthService();
const cryptoService = new CryptoService();
const jwtService = new JwtService();
const userService = new UserService();

export { emailAuthService, cryptoService, jwtService, userService };
