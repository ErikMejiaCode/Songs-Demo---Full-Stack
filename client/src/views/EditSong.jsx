import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { updateSong, getSongById } from '../services/internalApiServices';

export const EditSong = () => {

    const { id } = useParams();

    const [formData, setFormData] = useState({})

    const [errors, setErrors] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        getSongById(id)
            .then((data) => {
                setFormData(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        updateSong(id, formData)
            .then((data) => {
                console.log('update song data:', data)
                navigate(`/songs/${data._id}`)
            })
            .catch((error) => {
                console.log(error.response)
                setErrors(error.response?.data?.errors)
            })
    }

    const handleFormChanges = (e) => {
        if (e.target.type === "checkbox") {
            setFormData({
                ...formData,
                [e.target.name]: e.target.checked
            })
            return null;
        }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    if (formData === null) {
        return null;
    }

    const { title, artist, genre, src, isAbove330 } = formData;


    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center">
                Edit {title}
            </h3>
            <form onSubmit={(e) => {
                handleSubmit(e)
            }}>
                <div className="form-group">
                    <label className="h6">Title</label>
                    <input onChange={handleFormChanges}
                        type='text'
                        name='title'
                        value={title}
                        className="form-control"
                    />
                    {
                        errors?.title && (
                            <span className="text-danger">{errors.title?.message}</span>
                        )
                    }
                </div>
                <div className="form-group">
                    <label className="h6">Artist</label>
                    <input onChange={handleFormChanges}
                        type='text'
                        name='artist'
                        value={artist}
                        className="form-control"
                    />
                    {
                        errors?.artist && (
                            <span className="text-danger">{errors.artist?.message}</span>
                        )
                    }
                </div>
                <div className="form-group">
                    <label className="h6">YouTube</label>
                    <input onChange={handleFormChanges}
                        type='text'
                        name='src'
                        value={src}
                        className="form-control"
                    />
                    {
                        errors?.src && (
                            <span className="text-danger">{errors.src?.message}</span>
                        )
                    }
                </div>
                <div className="form-group mt-3">
                    <label className="h6">Genre</label>
                    <select onChange={handleFormChanges}
                        type='text'
                        name="genre"
                    >
                        <option value='lo-fi'>lo-fi</option>
                        <option value='Rock'>Rock</option>
                        <option value='hip-hop'>hip-hop</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>
                <hr />
                <h5>Is Above 3:30?</h5>
                <div className="form-check">
                    <input onChange={handleFormChanges}
                        name='isAbove330'
                        type='checkbox'
                        className="form-check-input"
                        checked={isAbove330}
                    />
                    <label className="h6 form-check-label">Is Above 3:30?</label>
                </div>
                <button className="btn btn-small btn-outline-success">Submit</button>
            </form>
        </div>
    )
}
