const express = require('express');
const ejs = require('ejs');

const port = 3000;
const host = 'localhost';
const blog = { id: 1, title: "Blog title", description: "Blog description" };

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
	//res.send(blog)
	res.render('index');
});

app.get('/about', (req,res) => {
	//res.send(blog)
	res.render('about');
});

app.get('/add', (req,res) => {
	//res.send(blog)
	res.render('add_post');
});


app.listen(port, host, () =>{
	console.log(`server started at ${host}:${port}`)
})