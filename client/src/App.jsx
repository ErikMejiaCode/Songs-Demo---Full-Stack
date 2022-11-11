import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { AllSongs } from './views/AllSongs'
import { EditSong } from './views/EditSong'
import { OneSong } from './views/OneSong'
import { NewSong } from './views/NewSong'

function App() {
  return (
    <div className="container">
      <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4'>
        <h1 className='navbar-brand mb-0'>Music Demo</h1>
        <div className="navbar-nav justify-content-between">
          <Link to='/songs' className='btn btn-sm btn-outline-primary mx-1'>
            Home
          </Link>
          <Link to='/songs/new' className='btn btn-sm btn-outline-primary mx-1'>
            New Song
          </Link>
        </div>
      </nav>


      <Routes>
        <Route path='/' element={<Navigate to='/songs' replace />} />
        <Route path='/songs' element={<AllSongs />} />
        <Route path='/songs/edit/:id' element={<EditSong />} />
        <Route path='/songs/:id' element={<OneSong/>} />
        <Route path='/songs/new' element={<NewSong />} />
      </Routes>

    </div>
  );
}

export default App;
