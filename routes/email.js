const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

router.post('/', async(req, res) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nukhba.shops@gmail.com',
            pass: 'ahvbfisxkhyfbxjo'


        }
    })

    // user: 'ashar.a.hmd11@gmail.com',
    // pass: 'skfyglracnfckxca'


    const mailOption = {
        from: "nukhba.shops@gmail.com",
        to: req.body.email,
        subject: "Nukhba Order Confirmation",
        html: `<div style='background-color:#000000;padding:10px'><img src='https://nukhba.shop/static/media/nukhbaLogo.27e48779.png'/><h1 style='color:#F4B92F;text-align:center;'\>Thanks For shopping ${req.body.name}</h1>\n<h3 style='padding:10px;color:#A38235'>${req.body.name} your order has been confirmed, for further query please contact us on our whatsapp.</h3></div>`
    }

    transport.sendMail(mailOption, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log("Email Sent" + info.response)
        }
    })


})


module.exports = router