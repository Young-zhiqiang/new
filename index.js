const express = require('express');
const server = express();
server.get('/',(req,res) => {
    res.send('打开的是傻瓜');


});
server.listen(80)