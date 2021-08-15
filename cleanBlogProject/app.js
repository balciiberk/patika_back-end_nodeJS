const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');

const Post = require('./models/Post');
const postControllers = require('./controllers/postControllers')


const app = express();
//database
mongoose.connect('mongodb://localhost/cleanblog-test-db', {useNewUrlParser: true, useUnifiedTopology: true});

//template engine
app.set('view engine', 'ejs');


//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method', {methods:['POST', 'GET']}));


//routes
app.get('/', postControllers.getAllPosts);
app.get('/posts/:id', postControllers.getPost);
app.post('/add_post', postControllers.createPost);
app.delete('/posts/:id', postControllers.deletePost);


app.get('/about', (req,res) => {
	res.render('about');
});

app.get('/add', (req,res) => {
	res.render('add');
});


const port = 3000;
const host = 'localhost';
app.listen(port, host, () =>{
	console.log(`server started at ${host}:${port}`)
});