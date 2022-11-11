const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters long.']
        },
        artist: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters long.']
        },
        genre: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters long.']
        },
        src: {
            type: String,
            required: [true, '{PATH} is required.'],
        },
        isAbove330: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
);


/*
Register schema with mongoose and provide a string to name the collection. 
This also returns a reference to our model that we can use for DB operations.
*/
const Song = mongoose.model("Song", SongSchema);

module.exports = {Song: Song};