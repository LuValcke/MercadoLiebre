const express = require('express');
const { dirname } = require('path');
const path = require('path')

const app = express();

const port = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))


app.listen(port, () => {
    console.log('server up', port)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})