const express=require('express');

const app=express();
const port=3000;

// app.use('/',(req,res)=>{
//     res.redirect('https://freemail.ukr.net')
// })

// bo + один любой символ + k
app.use('/bo?k',(req,res)=>{
    res.redirect('https://ukr.net')
})

// bo + любое количество любых символов + k
app.use('/go*gle',(req,res)=>{
    res.redirect('https://google.com')
})

// // book или book.html
// app.use('/book(.html)?',(req,res)=>{
//     res.redirect('https://ukr.net')
// })


app.listen((port),()=>{
    console.log('Server listen port 3000');
});