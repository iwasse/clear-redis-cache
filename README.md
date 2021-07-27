# ClearRedisCache

a node.js project to clear redis cache using express framework

## Install

*npm install*

## Configuration

create a file in root directory of project named "config.json"

example:  
{  
  "default": "<url>"  
}
  
url format: [redis[s]:]//[[user][:password@]][host][:port][/db-number][?db=db-number[&password=bar[&option=value]]]  

then localhost:3000/api/clear/default will clear cache of that redis server

## Start Server

*npm start*  
 
 

