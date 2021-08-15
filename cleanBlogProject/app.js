const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const Post = require('./models/Post');


const port = 3000;
const host = 'localhost';
const blog = { id: 1, title: "Blog title", description: "Blog description" };

const app = express();

mongoose.connect('mongodb://localhost/cleanblog-test-db', {useNewUrlParser: true, useUnifiedTopology: true});

//template engine
app.set('view engine', 'ejs');


//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', async (req,res) => {
	//res.send(blog)
	let posts = await Post.find()
	res.render('index', {
		posts: posts
	});
});

app.get('/about', (req,res) => {
	res.render('about');
});

app.get('/add', (req,res) => {
	res.render('add');
});

app.post('/add_post', async (req,res) => {
	await Post.create({
		title: req.body.title,
		detail: req.body.details
	});
	res.redirect('/');

});


app.listen(port, host, () =>{
	console.log(`server started at ${host}:${port}`)
});