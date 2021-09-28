const express = require('express')
const bodyParser = require('body-parser')

const app = express();


// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

//body-parser
app.use(bodyParser.urlencoded({ extended : true }))

// Routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)
app.use('/article', newsRouter)


const PORT = PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
});
