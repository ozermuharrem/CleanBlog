const express = require('express');
const mongoose = require('mongoose');
const path = require('path');// dosyalara ulaşabilmek için
const ejs = require('ejs');

const Blog = require('./models/Blog')

const app = express();

//mongodb

mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser:true,
  useUnifiedTopology:true
});


// middlewares

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//ejs 
app.set("view engine" , "ejs");

// const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
// app.get('/', (req, res) => {
//   res.status(200).send(blog);
// });

app.get('/' , async (req, res) => {
  const Blogs = await Blog.find({})
  res.render('index', {
    Blogs
  });
});

app.get('/about' , (req, res) => {
  res.render('about');
});
app.get('/add_post' , (req, res) => {
  res.render('add_post');
});
app.get('/post' , (req, res) => {
  res.render('post');
});


app.post('/blog', (req,res)=>{
  Blog.create(req.body);
  res.redirect('/');
})


app.listen(6060, () => {
  console.log(`server start`);
});
