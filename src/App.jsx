import './App.css'
import {HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Location from './pages/Location';
import Character from './pages/Character';



function App() {

  const home = <Home/>
  const location = <Location />
  const character =<Character />
  
  return (
    <HashRouter>
      <div className="App">

        <Routes>
          <Route path='/' element={home} />

          <Route path='/location' element={location} />

          <Route path='/location/:character' element={character} />
        </Routes>

      </div>
    </HashRouter>


  )
}

export default App
