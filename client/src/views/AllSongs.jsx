import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllSongs, deleteSong } from "../services/internalApiServices"

export const AllSongs = () => {
    const [songs, setSongs] = useState([])

    useEffect(() => {
        getAllSongs()
            .then((data) => {
                setSongs(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleDeleteClick = (idToDelete) => {
        deleteSong(idToDelete)
            .then((data) => {
                const filterSongs = songs.filter((song) => {
                    return song._id !== idToDelete
                })
                setSongs(filterSongs)
                // setSongs(songs.filter((song) => song._id !== idToDelete))
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div className="w-50 mx-auto text-center">
            <h2>All Songs</h2>
            {
                songs.map((song, i) => {
                    const { _id, title } = song
                    return (
                        <div key={i} className="shadow mb-4 rounded border p-4">
                            <h3>{title}</h3>
                            <div className="row d-flex justify-content-around">
                                <Link
                                    to={`/songs/${_id}`}
                                    className="col-3 btn btn-sm btn-outline-primary mx-1 mt-2">
                                    View
                                </Link>
                                <Link
                                    className="col-3 btn btn-sm btn-outline-warning mx-1 mt-2"
                                    to={`/songs/edit/${_id}`}>
                                    Edit
                                </Link>
                                <button onClick={(e) => {
                                    handleDeleteClick(_id)
                                }}
                                    className="col-3 btn btn-sm btn-outline-danger mx-1 mt-2">
                                    Delete
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}