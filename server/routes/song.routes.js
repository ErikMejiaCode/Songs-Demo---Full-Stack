const express = require('express')

const{
    handleCreateSong,
    handleGetAllSongs,
    handleGetSongById,
    handleDeleteSongByID,
    handleUpdateSongById
} = require('../controllers/song.controller')

const router = express.Router();

router.get('/', handleGetAllSongs)
router.get('/:id', handleGetSongById)
router.post('/', handleCreateSong)
router.put('/:id', handleUpdateSongById)
router.delete('/:id', handleDeleteSongByID)

module.exports = {songRouter: router};