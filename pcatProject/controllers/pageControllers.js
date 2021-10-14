const Photo = require('../models/Post');

exports.getIndex = async (req,res)=> {
	const allPhotos = await Photo.find({});
	res.render('index',{
		allPhotos:allPhotos
	});
};

exports.getAdd = (req,res)=> {
	res.render('add');
};

exports.getPhoto = async (req,res)=> {
	const photo = await Photo.findOne({_id:req.params.id});
	res.render('photo',{
		photo:photo
	});
};

exports.getAbout = (req,res)=>{
	res.render('about');
};

exports.getEditPage = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render('edit', {photo});
};

