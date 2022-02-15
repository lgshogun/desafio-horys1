const client = require ('./connection.js');
const express = require('express');

const app = express();

app.listen(3300, () =>{
    console.log("Server is now listening at port 3300");
});

client.connect();

app.get('/content', (req, res)=>{
    client.query(`Select * from content`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
});

app.get('/content/:id', (req, res)=>{
    client.query(`Select * from users where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
});



