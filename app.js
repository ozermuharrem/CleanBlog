const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const path = require('path');// dosyalara ulaşabilmek için
const ejs = require('ejs');

const Blog = require('./models/Blog');
//const { findByIdAndDelete, findByIdAndRemove } = require('./models/Blog');
const pageControl = require('./controls/pageControl')
const postControl = require('./controls/postControl')


const app = express();

//mongodb

mongoose.connect('mongodb://localhost:27017/cleanBlog-db', {
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
  console.log("db baglandı")
}).catch((error)=>{
  console.log(error);
});


// middlewares

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method', {
  methods : ['POST', 'GET']
}))

//ejs 
app.set("view engine" , "ejs");

// const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
// app.get('/', (req, res) => {
//   res.status(200).send(blog);
// });

app.get('/' , postControl.getAllPost);
app.get('/post/:id' ,postControl.getPost);

app.get('/about' ,pageControl.getAbout);
app.get('/add_post' , pageControl.getAddPage);
app.get('/post' , pageControl.getPost);


app.post('/blog', postControl.createPost)

// edit 

app.get('/blog/edit/:id', pageControl.getEdit)

app.put('/blog/:id', postControl.updatePost)


app.delete('/blog/:id', postControl.deletePost)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server start`);
});
