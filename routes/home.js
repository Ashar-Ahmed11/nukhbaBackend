const express = require('express')
const router = express.Router()
const Admin = require('../models/admin')
const Home = require('../models/home')
const fetchAdmin = require('../middleware/fetchadmin')

// router.post('/createhome', async(req, res) => {

//     try {

//         const admin = await Admin.findOne({ username: 'Suhaib Ahmed' })

//         const data = {
//             user: admin._id,
//             mainCarousalImgDesktop: 'https://nukhba.shop/static/media/carousalOne.f198a280.png',
//             mainCarousalImgPhone: 'https://nukhba.shop/static/media/carousalOneAlter.09d83747.png',
//             firstHeading: 'Fresh Arrivals',
//             secondSmallPara: 'A Newly Updated Look',
//             secondSmallHead: 'Nukhba',
//             secondSmallParaTwo: 'Now designed for a seamless experience, your daily dose of leather.',
//             secondSmallParaThree: 'We are getting ready for a "grand gesture" with new products under development and a brand-new definition of lifestyle under creation.',
//             bodyImg: 'https://nukhba.shop/static/media/bodyCarousal.b78b7f3a.png',
//             thirdSmallPara: 'Designed for Simplicity',
//             thirdSmallHead: 'Crafts that age elegantly',
//             thirdSmallParaTwo: 'Our trademark is a traditional cut presented in a contemporary serving style, created to meet the demands of todays dynamic world.',
//             fourSmallHead: 'Core Values',
//             fourSmallPara: 'When Nukhba was established, it had big plans:',
//             fourSmallParaTwo: 'To successfully enter the local market with goods that most closely match the description of international manufacturing standards while keeping the price cap within the means of the average domestic customer, and this trip has a narrative...',
//             secondHeading: 'Featured Ones',
//             footerCarousalImgDesktop: 'https://nukhba.shop/static/media/footerOne.196671c1.png',
//             footerCarousalImgPhone: 'https://nukhba.shop/static/media/footerOneAlter.e6685d89.png'
//         }

//         const home = await Home.create(data)
//         home.save()
//         res.send(home)


//     } catch (error) {
//         console.error(error.message)
//         return res.status(500).send("Some Internal Server Error")
//     }
// })

router.get('/gethome', async(req, res) => {
    const home = await Home.findById("63f127bd95347c4db240d404")
    res.send(home)
})

router.put('/edithome', fetchAdmin, async(req, res) => {

    try {

        const home = await Home.findOne({ user: req.user })
        if (!home) {
            return res.status(402).send("Not allowed!")
        }
        const newComponent = {}
        if (req.body.mainCarousalImgDesktop) { newComponent.mainCarousalImgDesktop = req.body.mainCarousalImgDesktop }
        if (req.body.mainCarousalImgPhone) { newComponent.mainCarousalImgPhone = req.body.mainCarousalImgPhone }
        if (req.body.firstHeading) { newComponent.firstHeading = req.body.firstHeading }
        if (req.body.secondSmallPara) { newComponent.secondSmallPara = req.body.secondSmallPara }
        if (req.body.secondSmallHead) { newComponent.secondSmallHead = req.body.secondSmallHead }
        if (req.body.secondSmallParaTwo) { newComponent.secondSmallParaTwo = req.body.secondSmallParaTwo }
        if (req.body.secondSmallParaThree) { newComponent.secondSmallParaThree = req.body.secondSmallParaThree }
        if (req.body.bodyImg) { newComponent.bodyImg = req.body.bodyImg }
        if (req.body.thirdSmallPara) { newComponent.thirdSmallPara = req.body.thirdSmallPara }
        if (req.body.thirdSmallHead) { newComponent.thirdSmallHead = req.body.thirdSmallHead }
        if (req.body.thirdSmallParaTwo) { newComponent.thirdSmallParaTwo = req.body.thirdSmallParaTwo }
        if (req.body.fourSmallHead) { newComponent.fourSmallHead = req.body.fourSmallHead }
        if (req.body.fourSmallPara) { newComponent.fourSmallPara = req.body.fourSmallPara }
        if (req.body.fourSmallParaTwo) { newComponent.fourSmallParaTwo = req.body.fourSmallParaTwo }
        if (req.body.secondHeading) { newComponent.secondHeading = req.body.secondHeading }
        if (req.body.footerCarousalImgDesktop) { newComponent.footerCarousalImgDesktop = req.body.footerCarousalImgDesktop }
        if (req.body.footerCarousalImgPhone) { newComponent.footerCarousalImgPhone = req.body.footerCarousalImgPhone }
        const note = await Home.findByIdAndUpdate('63f127bd95347c4db240d404', { $set: newComponent }, { new: true })

        res.send(note)
            // const home = await Home.create(data)
            // home.save()
            // res.send(home)


    } catch (error) {
        console.error(error.message)
        return res.status(500).send("Some Internal Server Error")
    }
})


module.exports = router