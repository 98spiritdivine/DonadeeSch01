
const express = require ('express')
// const expressLayouts = require('express-ejs-layouts')
var path = require('path');

const app = express()
const port = 3000

// static files
   app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))






// Set template engine
// app.use(expressLayouts)
// app.set('layout', '/layouts/full-width')
// app.set('view engine', 'ejs')

// Navigation

app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('Homepage')
})

app.get('/about', (req, res) => {
    res.render('AboutPage')
})

app.get('/game', (req, res) => {
    res.render('GameStie')
})

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/layouts', (req, res) => {
//     res.render('layouts.ejs')
// })

// listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))


//==========================================================

