import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layouts/Footer'
import NavBar from './layouts/NavBar'
import Home from './pages/Home'
import Details from './pages/Details'
import Dashboard from './pages/Dashboard'

function App() {
  

  return (
    <BrowserRouter>
        
          <NavBar/>
          <div>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/details" element={<Details/>}></Route>
              <Route path="/dashboard" element={<Dashboard/>}></Route>
              {/*<Route path="/login" element={<Login/>}></Route>*/}
            </Routes>
          </div>
          <Footer/>
      </BrowserRouter>
  )
}

export default App
