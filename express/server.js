const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const port = process.env.NODE_PORT || 80;

const root = path.join(__dirname, '/my-app');


app.get('*' ,function(req, res) {
  fs.stat(root + req.path, function(err){
    if(err){
        res.sendFile("index.html", { root });
    }else{
        res.sendFile(req.path, { root });
    }
  })
});

app.listen(port);
console.log('Listening on port '+ port);
