import multer from "multer";
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import crypto from 'crypto'
import path from "path";

const tamanho = 4 * 1024 * 1024;

const storage = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './uploads');
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);
                const fileName = `${hash.toString("hex")}-${file.originalname}`;
                const { name, ext } = path.parse(fileName);
                req.name = name
                req.ext = ext
                cb(null, fileName)
            })
        }
    }),
    s3: multerS3({
        s3: new aws.S3(),
        bucket:process.env.BUCKET_NAME,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const fileNameAws = `${hash.toString("hex")}-${file.originalname}`;
                
                const { name, ext } = path.parse(fileNameAws);
                
                req.name = name
                req.ext = ext

                cb(null, fileNameAws);
            })
        }
    })
}

const diretorio = multer({ dest: 'uploads/' })

export const upload = multer({
    storage:storage[process.env.STORAGE_TYPE],
    limits:{fileSize:tamanho}
}).fields([{name:'documento',maxCount:1},{name:'certificado',maxCount:1},{name:'comprovante',maxCount:1}])