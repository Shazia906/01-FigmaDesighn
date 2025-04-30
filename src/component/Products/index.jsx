// import { useEffect, useState } from "react";
// // import "../../index.css"
import './style.css'

// const SearchBar = () => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   const filteredData = data.filter((item) => {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <div id='center' className='vertical' style={{textAlign:"center"}}>
//       <h1 style={{padding:"20px"}}>Product Cards</h1>
//       <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by title" style={{width:"500px", height:"60px" ,}} />
//       {/* Cards display */}
//       <div className="product-cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
//         {searchTerm === '' ? (
//           data.length > 0 ? (
//             data.map((item) => (
//               <div key={item.id} className="card" style={cardStyle}>
//                 <img src={item.image} alt={item.title} style={imageStyle} />
//                 <h3 style={{padding:"15px"}}>{item.title}</h3>
//                 <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
//                 <h3 style={{color:"red"}}>{item.price}</h3>
//               </div>
//             ))
//           ) : (
//             <p>Loading...</p>
//           )
//         ) : (
//           filteredData.length > 0 ? (
//             filteredData.map((item) => (
//               <div key={item.id} className="card" style={cardStyle}>
//                 <img src={item.image} alt={item.title} style={imageStyle} />
//                 <h3 style={{padding:"15px"}}>{item.title}</h3>
//                 <p style={{padding:"5px"}}>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
//                 <h3 style={{color:"red"}}>{item.price}</h3>
//               </div>
//             ))
//           ) : (
//             <p>No results found.</p>
//           )
//         )}
//       </div>
//     </div>
//   );
// };
//  const cardStyle = {
//   border: '1px solid #ddd',
//   padding: '15px',
//   width: '300px',
//   borderRadius: '5px',
//   textAlign: 'center',
//   boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
// };

// const imageStyle = {
//   width: '150px',
//   height: '150px',
//   objectFit: 'cover',
// };

// export default SearchBar;

import { useState, useEffect } from "react";

function Fetch() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()) );
    setFilteredProducts(filteredProducts);
  };

  return (
    <div id='center' className='vertical products' style={{textAlign:"center"}}>
      <h1 style={{padding:"20px"}}>Product Cards</h1>
      <div className="fetch-section">
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Search products..." 
              className="search-input" 
              style={{width:"400px", height:"60px"}}
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button 
              style={{padding:" 10px 15px" , color:"white", backgroundColor:"red" , borderRadius:"10px" ,}} 
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="product-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="product-img" 
                  style={{width:"150px", height:"150px", objectFit:"cover"}}
                />
                <h2 className="product-title" style={{padding:"15px"}}>{product.title}</h2>
                <p style={{padding:"5px"}}>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                <h3 style={{color:"red"}} className="product-price"><strong>Price:</strong> ${product.price}</h3>
              </div>
            ))
          ) : (
            <p className="no-products">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Fetch;







