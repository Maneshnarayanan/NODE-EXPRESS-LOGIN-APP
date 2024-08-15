const express = require('express')

const app =express();

app.use(express.static('views'));

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})
