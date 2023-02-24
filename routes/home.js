const express = require('express')
const router = express.Router()
const Admin = require('../models/admin')
const Home = require('../models/home')
const fetchAdmin = require('../middleware/fetchadmin')
const Category = require('../models/category')
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
// router.post('/createcategory', async(req, res) => {

//     try {

//         const admin = await Admin.findOne({ username: 'Suhaib Ahmed' })

//         const data = {
//             user: admin._id,
//             mainCarousalImgDesktop: 'https://nukhba.shop/static/media/carousalThree.1caf02a9.png',
//             mainCarousalImgPhone: 'https://nukhba.shop/static/media/carousalThreeAlter.253f9baf.png',
//             mainHeading: 'Handbags',
//             firstHeading: 'Leather Handbags',
//             firstSmallPara: 'The best accessory is a leather belt. The greatest option for men who value elegance is this one. There is a reason why you should acquire a leather belt; it is regarded as a sign of elegance and quality.',
//             firstSmallParaTwo: "It enhances your sense of style and consistently feels like the ideal complement to any outfit you choose to wear, whether it is business- or casual-casual. When you carry a leather belt, you don't need to worry about the climate or weather outdoors since it will keep your belongings safe and secure in any situation. Because they are lightweight, you won't feel burdened even if you wear additional items like keys or cash.",
//             firstSmallParaThree: "At Nukhba, we go out of our way to pamper our clients by giving them the highest quality leather accessories and Handbags. We spent a lot of time learning precisely what they wanted, selecting only the best materials, and creating Handbags that were sophisticated and exquisite. We represent one of Pakistan's top belt brands, so you won't need to be concerned about the product's quality.",
//             secondHeading: "Purchase Stylish Leather Handbags of the Highest Quality Online in Pakistan.",
//             secondSmallPara: "The greatest leather Handbags for men and women are available at Nukhba. They are expertly created with great care. The materials are of the highest calibre, and the workmanship is flawless. These Handbags come in a range of designs and hues to suit your preferences. You may get it online in Pakistan, whether you want something with a basic, clean design or one with more intricate features. Gifting a handmade leather belt to a friend or relative who values fine craftsmanship is a great idea.",
//             secondSmallParaTwo: "Our leather Handbags are made from the best materials and may quickly up the elegance of your ensemble. Additionally, because our leather Handbags are made to last, you may cherish them for many years to come and pass them on to the following generation. There is a leather wallet for everyone, whether it's for business or leisure, so get yours now!",
//             secondSmallParaThree: "Moreover, we offer our customers with customized Handbags with name and picture as well! Last but not least, we offer every type of wallet from minimalist to bulky to zippered, and whatsoever. So, you can buy the best but affordable Handbags in Pakistan without any hassle!",

//         }

//         const home = await Category.create(data)
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
router.get('/getcategory/:id', async(req, res) => {
    const home = await Category.findById(req.params.id)
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
router.put('/editcategory/:id', fetchAdmin, async(req, res) => {

    try {

        const home = await Category.findOne({ user: req.user })
        if (!home) {
            return res.status(402).send("Not allowed!")
        }
        const newComponent = {}
        if (req.body.mainCarousalImgDesktop) { newComponent.mainCarousalImgDesktop = req.body.mainCarousalImgDesktop }
        if (req.body.mainCarousalImgPhone) { newComponent.mainCarousalImgPhone = req.body.mainCarousalImgPhone }
        if (req.body.mainHeading) { newComponent.mainHeading = req.body.mainHeading }
        if (req.body.firstHeading) { newComponent.firstHeading = req.body.firstHeading }
        if (req.body.firstSmallPara) { newComponent.firstSmallPara = req.body.firstSmallPara }
        if (req.body.firstSmallParaTwo) { newComponent.firstSmallParaTwo = req.body.firstSmallParaTwo }
        if (req.body.firstSmallParaThree) { newComponent.firstSmallParaThree = req.body.firstSmallParaThree }
        if (req.body.secondHeading) { newComponent.secondHeading = req.body.secondHeading }
        if (req.body.secondSmallPara) { newComponent.secondSmallPara = req.body.secondSmallPara }
        if (req.body.secondSmallParaTwo) { newComponent.secondSmallParaTwo = req.body.secondSmallParaTwo }
        if (req.body.secondSmallParaThree) { newComponent.secondSmallParaThree = req.body.secondSmallParaThree }


        const note = await Category.findByIdAndUpdate(req.params.id, { $set: newComponent }, { new: true })

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