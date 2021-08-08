const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {
	const url = req.url;
	res.writeHead(200, {'Content-type':'text/html'});

	if (url === '/') {
		res.write('<h2>Welcome to index page</h2>');
	} else {
		res.write(`<h2>Welcome to ${url.slice(1)} page</h2>`);
	}
	res.end();
}).listen(port, "localhost", () => {
	console.log(`server started at: localhost:${port}`);
});