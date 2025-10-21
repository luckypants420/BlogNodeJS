const mongoose = require('mongoose')

const Schema = mongoose.Schema

//schema is what defiens the structure of the document 
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

//create the model that is based on the schema 
const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog