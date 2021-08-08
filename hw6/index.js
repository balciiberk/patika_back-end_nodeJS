const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
	const url = ctx.URL.pathname;
	ctx.status=200;

	if (url === '/') {
	ctx.body = '<h1>Welcome to index page</h1>';
	} else {
	ctx.body = `<h1>Welcome to ${url.slice(1)} page</h1>`;
	}
});

app.listen(3000);