# clear-redis-cache

a node.js project to clear redis cache using express framework

## Install

*npm install*

## Configuration

create a file in root directory of project named "config.json"

**example:** 
```
{  
  "endpoint": "redis://alice:foobared@awesome.redis.server:6380"  
}
``` 
  
**url format:** `[redis[s]:]//[[user][:password@]][host][:port][/db-number][?db=db-number[&password=bar[&option=value]]]` 

**path:** `/api/clear`

## Start Server

*npm start*  (default port 3000)
 
 

