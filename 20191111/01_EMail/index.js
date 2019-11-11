// Работа с почтой EMail

const nodemailer=require('nodemailer');

const smtpTransport=nodemailer.createTransport(
    {
        service:"gmail",
        auth:{
            user:'oleksvlas@gmail.com',
            pass:'ShurikVl@s1988'
        }
    }
);

smtpTransport.sendMail(
    {
        from:'Test<oleksvlas@gmail.com>',
        to: 'Taras <ntapactest@gmail.com>',
        subject: 'Hi',
        // text:'Hello'
        html:'<h1 style="color:#f195ff">Hello</h1>'
    },(err,res)=>{
        if(err){
            throw err;
        } else{
            console.log('Send message complete')
        }
        smtpTransport.close(0);
    }
    
);


