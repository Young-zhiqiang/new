const express = require('express');
const server = express();
server.get('/',(req,res) => {
    res.send('山西工商学院');
});
server.listen(80)