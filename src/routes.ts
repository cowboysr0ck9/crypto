import LoginController from './controllers/auth/LoginController';
import RegisterController from './controllers/auth/RegisterController';
import MarketController from './controllers/crypto/MarketController';

const ROUTES = [
    new LoginController(),
    new RegisterController(),
    new MarketController()
];

export default ROUTES;
