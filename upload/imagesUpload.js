const multer = require('multer');
const path = require('path')


const storage = multer.diskStorage({
    destination: 'images',
    filename: (req, file, cb) => {
      cb( null,Date.now().toString()+ '-' + file.originalname);
    },
  });

const upload = multer({
    storage: storage,
    limits: {
      fileSize: 5000000, // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) { 
    if (
        file.mimetype === 'image/png'||
        file.mimetype === 'image/JPG' ||
        file.mimetype === 'image/jpeg' )
        {
            cb(null,true)
        }else{
            return cb(new Error("Please upload a Image"));
        }
}
})
module.exports = upload;