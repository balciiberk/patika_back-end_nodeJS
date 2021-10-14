const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

PhotoSchema = new mongoose.Schema({
	title: {
		type:String,
		unique: true
	},
	description: String,
	image: String,
	dateCreated: {
		type: Date,
		default: Date.now()
	}
});

Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;