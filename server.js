const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//simple routing parts
app.get('/', (req,res) => {
    res.send('Hello World');
})

app.get('/hello', (req,res) => {
    res.send('Hello World 2022');
})

app.get('/hello2', (req,res,next) => {
    res.send('Hello World 2023');
    next();
})

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})
