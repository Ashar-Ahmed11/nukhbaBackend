const express = require('express')
const router = express.Router()
const cloudinary = require('./cloud')



router.post('/', async(req, res) => {
    const file = req.files.photo
    const result = await cloudinary.uploader.upload(file.tempFilePath)

    res.send(result)
})


module.exports = router