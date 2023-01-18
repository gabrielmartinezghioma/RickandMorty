import './App.css'
import {HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Location from './pages/Location';
import CharacterId from './pages/CharacterId';



function App() {

  const home = <Home/>
  const location = <Location />
  const characterId =<CharacterId />
  
  return (
    <HashRouter>
      <div className="App">

        <Routes>
          <Route path='/' element={home} />

          <Route path='/location' element={location} />

          <Route path='/location/:characterId' element={characterId} />
        </Routes>

      </div>
    </HashRouter>


  )
}

export default App
