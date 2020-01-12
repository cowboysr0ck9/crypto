import * as express from 'express';
import * as fs from 'fs';
import * as multer from 'multer';
import { Logger } from '../../utils/logger';
import { UPLOAD_SUCCESS_MSG, UPLOAD_FAILURE_MSG } from './constants';

class TaxUploaderController {
    public path = '/tax-uploader';
    public router = express.Router();

    constructor() {
        const { path, router } = this;
        const multerClient: any = multer({ dest: 'uploads/' });

        router.post(`${path}/upload`, multerClient.single('file'), this.upload);
    }

    upload = async (req: express.Request, res: express.Response) => {
        try {
            fs.readFile(req.file.path, { encoding: 'utf8' }, (err, data) => {
                res.status(200).json({ success: true, data: UPLOAD_SUCCESS_MSG });
            });
        } catch (error) {
            const morgan = new Logger();
            morgan.logger.log({
                level: 'error',
                date: new Date().toISOString(),
                route: req.route.path,
                method: req.method,
                message: UPLOAD_FAILURE_MSG,
                body: JSON.stringify(req.body)
            });
            res.status(400).json({ success: false, msg: UPLOAD_FAILURE_MSG });
        }
    };
}

export default TaxUploaderController;
