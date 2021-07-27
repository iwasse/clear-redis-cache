const fs = require('fs');

let rawdata = fs.readFileSync('config.json');
let env = JSON.parse(rawdata);

exports.env = env