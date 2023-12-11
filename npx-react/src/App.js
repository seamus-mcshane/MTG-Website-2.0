import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Home from './pages/Home'
import Login from './pages/Login'
import Trade from './pages/Trade';
import Navbar from './components/Navbar';

// css
import './css/loginStyles.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
            <Route 
              path='/Login'
              element={<Login />}
              />
            <Route 
              path='/Trade'
              element={<Trade />}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
