import React from 'react'
import NavBar from './component/Nav/index.jsx'
import Fleshsales from './component/Flashsales/index.jsx';
import BrowserByCategory from './component/browserbycategory/index.jsx';
import Footer from './component/footer/index.jsx';
import Fetch from './component/Products/index.jsx';
import { Route, Routes } from 'react-router';
import Bestsellingproducts from './component/Bestsellingproducts/index.jsx';
import Musicexpereinces from './component/Musicexpereinces/index.jsx';
import Exploreourproducts from './component/Exploreourproducts/index.jsx';
import CustomerServices from './component/Customerservices/index.jsx';
import Newarival from './component/Newarival/index.jsx';


const App = () => {
  return (
    <>
  <Routes>
    <Route path='/' element={<>
      <NavBar/> 
   <Fleshsales/>
   <BrowserByCategory/>
   <Bestsellingproducts/>
   <Musicexpereinces/>
   <Exploreourproducts/>
   <Newarival/>
   <CustomerServices/>
   <Footer/>
    </>}>
 
    </Route>
  </Routes>
   <Routes>
    <Route path='products' element={<Fetch/>}>homepage</Route>
  </Routes>
    </>
     
  )
}

export default App;
