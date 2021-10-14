const fs = require('fs');
const express = require('express');
const ejs = require('ejs');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');

const Photo = require('./models/Post');
const pageControllers = require('./controllers/pageControllers');
const photoControllers = require('./controllers/photoControllers');


const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method',{methods:['GET', 'POST']}));


app.get('/', pageControllers.getIndex);
app.get('/add', pageControllers.getAdd);
app.get('/photo/:id', pageControllers.getPhoto);
app.get('/about', pageControllers.getAbout);
app.get('/edit/:id', pageControllers.getEditPage);


app.post('/photo', photoControllers.postPhoto);
app.put('/photo/:id', photoControllers.updatePhoto);
app.delete('/photo/:id', photoControllers.deletePhoto);

app.listen(3000, ()=> {
	console.log(`Server started at localhost:3000`);
});