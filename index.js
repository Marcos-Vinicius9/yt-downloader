const fs = require('fs');
const express = require('express');
const app = express();
const ytdl = require('ytdl-core');

app.use(express.urlencoded({extended:true}));
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', (req,res) =>{
    res.render('index');
})

app.post('/download', (req,res) =>{
    let url = req.body.link;

    res.header("content-Disposition", 'attachmentt; filename="video.mp4"')
    return ytdl(url).pipe(res);
    

  
})

app.listen(3000);