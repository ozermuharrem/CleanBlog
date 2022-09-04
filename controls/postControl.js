const Blog = require('../models/Blog')


exports.getAllPost = async (req, res) => {
    const Blogs = await Blog.find({}).sort('-creatDate')
    res.render('index', {
      Blogs
    });
  }

exports.getPost = async (req, res) => {
    const post = await Blog.findById(req.params.id);
    res.render('post', {
      post
    })
  }

exports.createPost = (req,res)=>{
    Blog.create(req.body);
    res.redirect('/');
  }

exports.updatePost = async (req,res) => {
    const post = await Blog.findOne({_id : req.params.id});
     post.title = req.body.title;
     post.auther = req.body.auther;
     post.detail = req.body.detail;
     post.save();
  
     res.redirect(`/post/${req.params.id}`)
  
  }

exports.deletePost = async (req,res) => {
    await Blog.findByIdAndRemove(req.params.id);
  
    res.redirect('/');
  }