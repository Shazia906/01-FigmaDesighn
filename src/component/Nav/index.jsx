import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';

// const NavBar = () => {
// //  const navigate = useNavigate();
//   return (
//     <div className='navbar' id='center'>
//     <div>
//         <h1>Exclusive</h1>
//     </div>
//     <div className='center' style={{display: 'flex' , alignItems:"center"}}>
//         <a href="#home">Home</a>
//         <a href="#contact">Contact</a>
//         <a href="#">About</a>
//         <a href="#">Sign Up</a>
//         {/* <button style={{padding:"15px 20px" , borderRadius:"5px" , backgroundColor:"red"}} onClick={()=>{
//           navigate("/products")
//         }} >Products</button> */}
//        <Link to="/products" >
//        <button style={{padding:"10px 20px" , borderRadius:"5px" , backgroundColor:"red"}}>Navigate</button></Link>
//     </div>
//    <div className='search'>
//    <div className='search' >
//     <div id='icons'>
//        <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//          </svg>
//         <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M3 5H7L10 22H26" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//        </svg></div>
//    </div>
  
//     </div>
// </div>
//   )
// }

// export default NavBar;


const NavBar = () => {
  return (
    <div className='navbar' id='center'>
      <div className='left'>
        <h1>Exclusive</h1>
      </div>
      <div className='right'>
        <div className='desktop-menu'>
          <a href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#">About</a>
          <a href="#">Sign Up</a>
          <Link to="/products">
            <button className='listsbutton'>Navigate</button>
          </Link>
        </div>
        <div id='icons'>
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> 
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
 <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
 <path d="M3 5H7L10 22H26" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
 <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div className='mobile-menu-icon' onClick={() => document.querySelector('.mobile-menu').style.display = 'block'}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20V8H4V6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 12H20V14H4V12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 18H20V20H4V18Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className='mobile-menu' style={{zIndex:"1", position: 'absolute', top: 0, left:"0px", backgroundColor: 'white', padding: "40px", display: 'none' , borderRadius:"5px", boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.1)"}}>
          <div className='mobile-menu-header'>
            <h1>Exclusive</h1>
            <div className='mobile-menu-close-icon' onClick={() => document.querySelector('.mobile-menu').style.display = 'none'}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div className='mobile-menu-content'>
            <a href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a href="#">About</a>
            <a href="#">Sign Up</a>
            <Link to="/products">
              <button className='listsbutton'>Navigate</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;











