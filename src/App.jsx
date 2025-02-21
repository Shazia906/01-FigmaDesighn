import React from 'react'
import NavBar from './component/Nav/index.jsx'
import Section2 from './component/section-2/index.jsx';
import Section3 from './component/section-3/index.jsx';
import Section4 from './component/section4/index.jsx';
import Section5 from './component/section5/index.jsx';
import SEction6 from './component/section6/index.jsx';
import Section7 from './component/section7/index.jsx';
import Section8 from './component/section8/index.jsx';
import Fotter from './component/section9/index.jsx';
import Search from './component/search/index.jsx';
import SearchBar from './component/search/index.jsx';


const App = () => {
  return (
    <>
   <SearchBar/>
   <NavBar/> 
   <Section2/>
   <Section3/>
   <Section4/>
   <Section5/>
   <SEction6/>
   <Section7/>
   <Section8/>
   <Fotter/>
    </>
     
  )
}

export default App;
