const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
    {
        title: String,
        detail : String,
        auther : String,
        creatDate : {
            type: Date,
            default: Date.now
        }
    }
)

const Blog = mongoose.model('Blogs', BlogSchema);

module.exports = Blog;