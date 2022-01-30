/*import fs from 'fs';
/*
// fs.readFile('data.txt','utf-8',(err,data)=>{
//     if(err){
//         //handle error
//     }
//     console.log(data);
// });


/*
// fs.readFile('index.js','utf-8',(err,data)=>{
//     if(err){
//         //handle error
//     }
//     console.log(data);
// });


const content = 'This is text data1';
fs.writeFile('data.txt',content,(err)=>{
    if(err){
        console.log("error writing file");
    }
});*/

import express from 'express';
import fs from 'fs';
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/assets',express.static('public'));

app.get('/',(req,res)=>{
    fs.readFile('index.html','utf-8',(err,data)=>{
        if(err) return res.status(500).send('error loading index.html');
        return res.status(200).send(data);
    });
});

app.get('/data',(req,res)=>{
    res.json({success:true,message:'Hello World'});
})

app.post('/login',(req,res)=>{
    const{username,password} = req.body;
    if(!username || !password){
        return res.status(400).json({error:true,message:'username or password empty'});
    }
    return res.status(200).json({success:true,message: 'Login successful'});
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});