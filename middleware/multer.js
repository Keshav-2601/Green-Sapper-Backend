import multer from "multer";

const msstorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Ensure this directory exists
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});

const upload = multer({ storage: msstorage });

export { upload };