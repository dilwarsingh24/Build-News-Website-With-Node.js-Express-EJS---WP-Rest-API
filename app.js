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

app.set('port', process.env.PORT || 7000);

// Start server
app.listen(app.get('port'), function(){
  console.log("Express started on http://localhost:" + app.get('port') );
});
