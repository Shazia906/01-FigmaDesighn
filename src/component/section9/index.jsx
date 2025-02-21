import React from 'react'
import image1 from "./../../../images/qr-code.webp";
import image2 from "./../../../images/appstore.png";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-container">
        {/* Exclusive Section */}
        <div className="footer-section">
          <h3>Exclusive</h3>
          <ul>
          <li>Subscribe</li>
          <li>Get 10% off your first order</li>
          </ul>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>➜</button>
          </div>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <ul>
          <h3>Support</h3>
          <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
          </ul>
        </div>

        {/* Account Section */}
        <div className="footer-section">
          <h3>Account</h3>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Link</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div className="footer-section">
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="qr-code">
            <img src={image1} alt="QR Code" />
            <div className="app-links">
              <img src={image2} alt="App Store" />
            </div>
          </div>
          {/* <div className="social-icons">
          <a href="#" className="icon"><FaFacebookF style={{ color: "#fff" }} /></a>
          <a href="#" className="icon"><FaTwitter style={{ color: "#fff" }} /></a>
          <a href="#" className="icon"><FaInstagram style={{ color: "#fff" }} /></a>
          <a href="#" className="icon"><FaLinkedinIn style={{ color: "#fff" }} /></a>

          </div> */}
        </div>
      </div>
    </footer>
   
  );
};

export default Footer;
