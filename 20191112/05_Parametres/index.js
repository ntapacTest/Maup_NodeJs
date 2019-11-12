const express=require('express');

const app=express();
const port=3000;

app.get('/books/:book/:author',(req,res)=>{
    res.send("BooksId :"+req.params['book']+", Author :"+req.params['author']);
});

app.listen((port),()=>{
    console.log('Server listen port 3000');
});