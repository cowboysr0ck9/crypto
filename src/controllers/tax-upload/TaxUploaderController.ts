import * as express from 'express';
import * as fs from 'fs';
import * as multer from 'multer';

// Response Messages
const UPLOAD_SUCCESS_MSG = 'Thanks, your file was uploaded.';
const UPLOAD_FAILURE_MSG = 'Sorry, your file could not be uploaded.';

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
                res.status(200).json({ msg: UPLOAD_SUCCESS_MSG });
            });
        } catch (error) {
            res.status(404).json({ msg: UPLOAD_FAILURE_MSG });
        }
    };
}

export default TaxUploaderController;
