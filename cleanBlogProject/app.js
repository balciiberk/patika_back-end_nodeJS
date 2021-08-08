const express = require('express');

const port = 3000;
const host = 'localhost';
const blog = { id: 1, title: "Blog title", description: "Blog description" };

const app = express();

app.get('/', (req,res) => {
	res.send(blog)
});

app.listen(port, host, () =>{
	console.log(`server started at ${host}:${port}`)
})