const redis = require('redis');
const config = require('./config');


exports.clearCache = (target) => {
    return new Promise((resolve, reject) => {
        hostsMap = new Map(Object.entries(config.env))

        cli = redis.createClient({
            url: hostsMap.get(target),
            tls: true
        })

        cli.on('connect', () => {
            console.log("Connected to redis: " + target)
            cli.flushdb( (success) => {
                console.log("Cache cleared: "+success)
            })
            cli.quit()    
        })

        cli.on('error', (error) => {
            console.log(error)
            reject(error)
        })

        cli.on('end', (error) => {
            console.log("Closing redis connection for " + target)
            resolve(true)
        })
    })

}