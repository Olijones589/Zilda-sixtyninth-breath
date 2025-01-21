const express = require('express');
const fs = require("fs");
const https = require('https');
const app = express();
const port = 4327;

var server = null;

const certoptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/www.project-sentinel.xyz/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/www.project-sentinel.xyz/fullchain.pem')
};

server = https.createServer(certoptions, app);

app.use(express.static("Main-v1"));

server.listen(PORT, () => {
    console.log(`HTTPS Server running on port ${PORT}`);
});