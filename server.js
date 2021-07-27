const express = require("express");
const clear = require('./api/clearCache');
const app = express();
require('dotenv').config();


app.get('/', (req, res) => {
    res.json({ 'Message': 'conected' })
})

app.get('/api/clear/:targetRedis', async function (req, res) {
    let target = req.params.targetRedis
    
    try {
        await clear.clearCache(target)

        res.send({
            'cache': `${req.params.targetRedis}`,
            'message': 'Successfully cleared cache',
            'status': 200
        })

    } catch (err) {
        console.error(`Error flushing db '${target}': ` + err)
        res.send({ "error": 500 })
    }

})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})






