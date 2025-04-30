import React from 'react'
import sectionimage from "./../../../images/music.png"

const Musicexpereinces = () => {
  return (
    <div id='center' className='vertical  music'>
      <div className='musicleft'>
        <p style={{fontSize:"larger" , color:"green"}}>Categories</p>
        <h2>
Enhance Your <br /> Music Experience</h2>
<div className='musictime'>
  <div >
    <h6>23</h6>
    <p>Hours</p>
  </div>
  <div>
    <h6>05</h6>
    <p>Days</p>
  </div>
  <div>
    <h6>50</h6>
    <p>Minutes</p>
  </div>
  <div>
    <h6>30</h6>
    <p>Seconds</p>
  </div>
</div>
<button style={{
  backgroundColor:"green", color:"white",
  fontSize:"larger",
  padding:"15px 40px",
  borderRadius:"10px",
  outline:"none",
  border:"none",
}}>Buy Now</button>
      </div>

       <div className='musicimage'>
        <img src={sectionimage} alt="" /></div> 
    </div>
  )
}

export default Musicexpereinces