const express = require('express');
const server = express();
server.get('/',(req,res) => {
    res.send('a');
});
server.listen(2000)