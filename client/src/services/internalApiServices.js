import axios from 'axios';


const http = axios.create({
    baseURL: 'http://localhost:8000/api'
});

export const getAllSongs = async () => {
    const res = await http.get('/songs');
    return res.data;
} 

export const getSongById = async (id) => {
    const res = await http.get(`/songs/${id}`);
    return res.data;
} 

export const createSong = async (data) => {
    const res = await http.post('/songs', data);
    return res.data;
} 

export const updateSong= async (id, data) => {
    const res = await http.put(`/songs/${id}`, data);
    return res.data;
} 

export const deleteSong = async (id) => {
    const res = await http.delete(`/songs/${id}`);
    return res.data;
} 