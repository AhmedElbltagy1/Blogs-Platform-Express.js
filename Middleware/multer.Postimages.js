const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,path.join(__dirname,"../uploads/PostsImages"))
    },
    filename: function (req, file, cb) {
        let prefix = Date.now();
        cb(null, prefix + file.originalname)
    }

})
function fileFilter (req,file,cb){
    if (file.mimetype =='image/jpeg'||file.mimetype =="image/png"||file.mimetype =="image/jif") {
        cb(null,true)
    }else{
        cb("in valid type ",false)
    }
}
const upload = multer({fileFilter,storage:storage});

module.exports = upload;