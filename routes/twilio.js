const express = require('express');

const router = express.Router()
const accountSid = 'AC618f765df3b485f886848c1f0e5f063b';
const authToken = '2638c0ac34b015be72a53eec0f7b60d9';
const client = require('twilio')(accountSid, authToken);



router.post('/', async(req, res) => {
    await client.messages
        .create({
            body: `Customer Name: ${req.body.name}\nEmail: ${req.body.email}\nPhone Number: ${req.body.phone}\nAddress: ${req.body.address}\nCity: ${req.body.city}\nProducts: ${req.body.products}\nSubtotal: ${req.body.total}`,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+923363374624'
        })



    res.send(req.body)
})



module.exports = router