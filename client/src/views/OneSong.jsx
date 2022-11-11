import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSongById } from '../services/internalApiServices';

export const OneSong = () => {
    const { id } = useParams();

    const [song, setSong] = useState(null);

    useEffect(() => {
        getSongById(id)
            .then((data) => {
                setSong(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    if (song === null) {
        return null;
    }

    const { title, artist, genre, isAbove330, src } = song;

    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <h4>{title}</h4>
            <h5>Artist: {artist}</h5>
            <h5>Is Above 3:30: {isAbove330? "Yes" : "No"}</h5>
            <h5>Genre: {genre}</h5>
            <iframe 
            width="880px" 
            height="450px" 
            src={`https://www.youtube.com/embed/${src}`} 
            title={title} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>
        </div>
    )
}
