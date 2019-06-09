import * as express from 'express';
import { OpenMarketCapService } from '../../services';
import { CoinMarketCapService } from '../../services';

class MarketController {
    public path = '/market';
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        const { path, router, ...x } = this;
        router.get(`${path}/omc`, x.omc);
        router.get(`${path}/cmc`, x.cmc);
    }

    omc = async (req: express.Request, res: express.Response) => {
        try {
            const omc = new OpenMarketCapService();
            const tokens = await omc.getTopTenTokens(10);
            res.json(tokens);
        } catch (error) {
            throw new Error('OpenMarketCap');
        }
    };

    cmc = async (req: express.Request, res: express.Response) => {
        try {
            const cmc = new CoinMarketCapService();
            const tokens = await cmc.getTopTenTokens(10, 'USD');
            res.json(tokens);
        } catch (error) {
            throw new Error('CoinMarketCap');
        }
    };
}

export default MarketController;
