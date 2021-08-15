const mongoose = require('mongoose');

postSchema = mongoose.Schema({
	title: String,
	detail: String,
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;