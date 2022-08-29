const express = require('express');
const path = require('path');// dosyalara ulaşabilmek için
const ejs = require('ejs');

const app = express();

app.use(express.static('public'));
app.set("view engine" , "ejs");

// const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
// app.get('/', (req, res) => {
//   res.status(200).send(blog);
// });

app.get('/' , (req, res) => {
  res.render('index');
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



app.listen(6060, () => {
  console.log(`server start`);
});
