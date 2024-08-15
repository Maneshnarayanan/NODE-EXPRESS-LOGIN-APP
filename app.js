const express = require('express')
const app =express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('views'));

const PORT = process.env.PORT || 3001;

const dbEmail = "mkn@gmail.com"
const dbPassword = "123"

app.get('/home',(req,res)=>{
    res.render('home')
})

app.post('/login',(req,res)=>{ 
    const {email , password} = req.body
    if (email===dbEmail && password === dbPassword){
        res.render('./home')
    }else {
        res.status(401).send('Invalid credentials'); 
    }


})

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})
