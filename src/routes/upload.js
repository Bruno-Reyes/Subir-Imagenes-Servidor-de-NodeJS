const { Router } = require('express')
const router = Router()
const multer = require('multer')
const path = require('path')
const uuid = require('uuid/v4')

const storage = multer.diskStorage({
    destination : path.join(__dirname , '../public/img'),
    filename : (req,file,cb) => {
        cb(null, uuid() + path.extname(file.originalname))
    }
})

const configMulter = multer({
    storage,
    fileFilter : (req,file,cb) => {
        const filetypes = /jpeg|jpg|png|gif/
        const mimetype = filetypes.test(file.mimetype)
        const extname = filetypes.test(path.extname(file.originalname))
        if(mimetype && extname){
            return cb(null, true)
        }
        else{
            cb('Error el archivo debe ser una imagen valida')
        }
    }
}).single('image')

router.post('/subirImg', configMulter,(req,res) => {
    const { asd } = req.body
    console.log(req.file)
    console.log(asd)
    
    res.send('imagen subida')    
})

module.exports = router
