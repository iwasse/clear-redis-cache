const redis = require("redis")
const express = require("express");
const app = express();
require('dotenv').config()


app.get('/', (req, res) => {
    res.json({'Message': 'conected'})
})

app.get('/api/financings/clear', (req, res) => {
        const client = redis.createClient({
            host: process.env.HOST_FINANCINGS,
            port: process.env.REDIS_PORT_FINANCINGS,
            password: process.env.REDIS_PASSWORD_FINANCINGS,
            tls: true
        })
        
        client.flushdb(function(err, success){
            if(success){
            console.log("Financings - flushdb: " + success)
                res.send({
                    'cache': 'Financings',
                    'message': 'Successfully cleared cache',
                    'status': success
                })
            }
            else
            console.log('Error ' + err)
        })
         
        client.on('error', err => {
            console.log('Error ' + err);
        });

        client.quit()

})


app.get('/api/loans/clear', (req, res) => {
        const client = redis.createClient({
            host: process.env.HOST_LOANS,
            port: process.env.REDIS_PORT_LOANS,
            password: process.env.REDIS_PASSWORD_LOANS,
            tls: true
        })
        
        client.flushdb(function(err, success){
            if(success){
                console.log("Loans - flushdb: " + success)
                res.send({
                    'cache': 'Loans',
                    'message': 'Successfully cleared cache',
                    'status': success
                })
            }
            else
            console.log('Error ' + err)
        })
         
        client.on('error', err => {
            console.log('Error ' + err);
        });
        
        client.quit()
    
})


app.get('/api/unarranged-accounts-overdraft/clear', (req, res) => {
        const client = redis.createClient({
            host: process.env.HOST_UNARRANGED,
            port: process.env.REDIS_PORT_UNARRANGED,
            password: process.env.REDIS_PASSWORD_UNARRANGED,
            tls: true
        })
        
        client.flushdb(function(err, success){
            if(success){
                console.log("Unarranged Accounts Overdraft - flushdb: " + success)
                res.send({
                    'cache': 'Unarranged Accounts Overdraft',
                    'message': 'Successfully cleared cache',
                    'status': success
                })
            }
            else
            console.log('Error ' + err)
        })
         
        client.on('error', err => {
            console.log('Error ' + err);
        });
        
        client.quit()
    
})

app.get('/api/consents/clear', (req, res) => {
    const client = redis.createClient({
        host: process.env.HOST_CONSENTS,
        port: process.env.REDIS_PORT_CONSENTS,
        password: process.env.REDIS_PASSWORD_CONSENTS,
        tls: true
    })
    
    client.flushdb(function(err, success){
        if(success){
            console.log("Consents - flushdb: " + success)
            res.send({
                'cache': 'Consents',
                'message': 'Successfully cleared cache',
                'status': success
            })
        }
        else
        console.log('Error ' + err)
    })
     
    client.on('error', err => {
        console.log('Error ' + err);
    });
    
    client.quit()

})


const port = process.env.PORT
app.listen(port, () =>{
    console.log(`Listening on port ${port}...`)
})






