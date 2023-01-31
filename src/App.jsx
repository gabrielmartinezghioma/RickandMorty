import {HashRouter, Routes, Route } from 'react-router-dom';
import Location from './pages/Location';
import CharacterId from './pages/CharacterId';



function App() {

  const location = <Location />
  const characterId =<CharacterId />
  
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={location} />
          <Route path='/location/:characterId' element={characterId} />
        </Routes>

      </div>
    </HashRouter>

  )
}

export default App
