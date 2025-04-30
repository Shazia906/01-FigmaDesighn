import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Fetch from './component/search/index.jsx';
import { BrowserRouter, Route, Routes } from 'react-router'
import NavBar from './component/Nav/index.jsx';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  {/* <StrictMode> */}
  <Routes>
    <Route path='/homesection' element={<NavBar/>}>homepage</Route>
  </Routes>
    <App/>
  {/* </StrictMode> */}
  </BrowserRouter>
)
