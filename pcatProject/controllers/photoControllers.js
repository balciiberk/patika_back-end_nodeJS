const fs = require('fs');
const Photo = require('../models/Post');


exports.postPhoto = async (req,res)=> {
	await Photo.create({
		...req.body,
		image: '/uploads/' + req.files.image.name
	});
	await req.files.image.mv(__dirname + '/../public/uploads/' + req.files.image.name);
	res.redirect('/');
};

exports.deletePhoto = async (req,res)=> {
	const photo = await Photo.findById(req.params.id);
	fs.unlinkSync(__dirname+'/../public'+photo.image);
	await Photo.findByIdAndDelete(req.params.id);
	res.redirect('/');
};

exports.updatePhoto = async (req,res)=> {
	const photo = await Photo.findById(req.params.id);
	photo.description = req.body.description;
	photo.title = req.body.title;
	photo.save();
	res.redirect(`/photo/${req.params.id}`);
};