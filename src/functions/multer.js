import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/public/uploads/");

  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { 
    fileSize: 10000000, // Aumenta el límite de tamaño de archivo a 10MB
    fieldSize: 10000000, // Aumenta el límite de tamaño de los campos de texto a 10MB
  },
});

export default upload;