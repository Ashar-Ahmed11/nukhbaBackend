const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/api/sendmessage', require('./routes/twilio'))
app.use('/api/sendemail', require('./routes/email'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})