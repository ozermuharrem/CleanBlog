const Blog = require('../models/Blog')

exports.getAbout =  (req, res) => {
    res.render('about');
  }

exports.getAddPage = (req, res) => {
    res.render('add_post');
  }

exports.getPost = (req, res) => {
    res.render('post');
  }

exports.getEdit = async (req, res) => {
    const post = await Blog.findOne({_id : req.params.id });
  
    res.render('edit', {
      post
    })
  
  }