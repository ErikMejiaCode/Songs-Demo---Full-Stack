const {Song} = require('../models/song.model')

const createSong = async (data) => {
    console.log('service: createSong');
    const song = await Song.create(data);
    return song;
}

const getAllSongs = async () => {
    console.log('service: getAllSongs')
    const songs = await Song.find();
    return songs;
}

const getSongById = async (id) => {
    console.log('service: getSongById')
    const song = await Song.findById(id);
    return song;
}

const deleteSongById = async (id) => {
    console.log('service: deleteSongById')
    const song = await Song.findByIdAndDelete(id);
    return song;
}

const getSongByIdAndUpdate = async (id, data) => {
    console.log('service: getSongByIdAndUpdate')
    const song = await Song.findByIdAndUpdate(id, data, {
        //re-run our validations upon updated
        runValidators: true,
        //return the updated song.
        new: true
    });
    return song;
}

module.exports = {
    createSong,
    getAllSongs,
    getSongById,
    deleteSongById,
    getSongByIdAndUpdate
};