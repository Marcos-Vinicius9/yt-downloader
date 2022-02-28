const fs = require('fs');
const express = require('express');
const app = express();
const ytdl = require('ytdl-core');

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

let gerador = () =>{
    return Math.floor(Math.random() * 999)
}
app.get('/', (req,res) =>{
    res.render('index');
})

app.post('/download', (req,res) =>{
    let url = req.body.link;

    res.header("content-Disposition", `attachmentt; filename="video${gerador()}.mp4"`)
    return ytdl(url).pipe(res);
    

  
})

app.listen(3000);