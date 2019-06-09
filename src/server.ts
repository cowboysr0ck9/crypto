import { APP_CONFIG } from './config/config';
import App from './app';
import ROUTES from './routes';

const app = new App(ROUTES, APP_CONFIG.PORT);

app.listen();
