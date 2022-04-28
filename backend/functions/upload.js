import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file ,cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) =>{
        const { name, ext } = path.parse(file.originalname);
        req.name = name
        req.ext = ext
        cb(null, `${name}.${ext}`)
    }
})

const diretorio = multer({dest:'uploads/'})

export const upload = multer({ storage })