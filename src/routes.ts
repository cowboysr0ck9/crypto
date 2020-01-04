import LoginController from './controllers/auth/LoginController';
import RegisterController from './controllers/auth/RegisterController';
import MarketController from './controllers/crypto/MarketController';
import TaxUploaderController from './controllers/tax-upload/TaxUploaderController';

const ROUTES = [new LoginController(), new RegisterController(), new MarketController(), new TaxUploaderController()];

export default ROUTES;
