const {
    createSong,
    getAllSongs,
    getSongById,
    deleteSongById,
    getSongByIdAndUpdate
} = require('../services/song.service')

//Create song 
const handleCreateSong = async (req, res) => {
    console.log('controller: handleCreateSong, req.body:', req.body);
    try{
        const song = await createSong(req.body);
        return res.json(song)
    } catch(error) {
        return res.status(400).json(error)
    }
}

//Get all songs 
const handleGetAllSongs = async (req, res) => {
    console.log('controller: handleGetAllSongs');
    try{
        const songs = await getAllSongs();
        return res.json(songs)
    } catch(error) {
        return res.status(400).json(error)
    }
}

//Get song by ID 
const handleGetSongById = async (req, res) => {
    console.log('controller: handleGetSongById, req.params: ', req.params.id);
    try{
        const song = await getSongById(req.params.id);
        return res.json(song)
    } catch(error) {
        return res.status(400).json(error)
    }
}

//Delete song by ID 
const handleDeleteSongByID = async (req, res) => {
    console.log('controller: handleDeleteSongByID, req.params: ', req.params.id);
    try{
        const song = await deleteSongById(req.params.id);
        return res.json(song)
    } catch(error) {
        return res.status(400).json(error)
    }
}

//Update song by ID 
const handleUpdateSongById = async (req, res) => {
    console.log('controller: handleUpdateSongById, req.params: ', req.params.id, "\n req.body: ", req.body);
    try{
        const song = await getSongByIdAndUpdate(req.params.id, req.body);
        return res.json(song)
    } catch(error) {
        return res.status(400).json(error)
    }
}




module.exports = {
    handleCreateSong,
    handleGetAllSongs,
    handleGetSongById,
    handleDeleteSongByID,
    handleUpdateSongById
}