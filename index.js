const PORT = process.env.PORT || 5000

const app = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/test', (req, res) => {
    return res.send({
        'suhu': 10,
    })
})

app.listen(PORT, () => {
    console.log(`Listening on ${ PORT }`)
})