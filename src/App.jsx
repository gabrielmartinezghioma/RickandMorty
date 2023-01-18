import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Location from './pages/Location';



function App() {



  const home = <Home/>
  const location = <Location />



  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path='/' element={home} />

          <Route path='/location' element={location} />
        </Routes>

      </div>
    </BrowserRouter>


  )
}

export default App
