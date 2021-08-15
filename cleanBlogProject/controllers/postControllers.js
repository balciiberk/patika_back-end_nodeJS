const Post = require('../models/Post');


exports.getAllPosts = async (req,res) => {
	let posts = await Post.find()
	res.render('index', {
		posts: posts
	});
}

exports.getPost = async (req,res) => {
	const post = await Post.findById(req.params.id);
	res.render('post', {
		post:post
	});
}

exports.createPost = async (req,res) => {
	await Post.create({
		title: req.body.title,
		detail: req.body.details
	});
	res.redirect('/');
}

exports.deletePost = async (req, res) => {
	await Post.findByIdAndDelete(req.params.id)
	res.redirect('/')
}