import Reapagepart3ct from 'react'
import page1 from "./../../../images/page1.png";
import page2 from "./../../../images/page2.png";
import page3 from "./../../../images/page3.png";
import page4 from"./../../../images/page4.png";


const Section7 = () => {
  return (
    <div id='center' className='vertical section'> 
    <div className='first'>
      <div class ="reddiv"></div>
      <p className='reded'>Today's</p>
    </div>
    <div className='salesSection'>
        <div><h2>New Arival</h2></div>
    </div>
  <div className='pages'>
    <div className='pagepart'>
        <img className='play' src={page1} width="450px" height="350px"  alt="" />
        <div className='text'>
          <h1>Play Station's 5</h1>
           <p>Buy our products with good quility and our <br /> products very resposive products</p>
           <p>$40000</p>
          </div>
    </div>
    <div className='part2'>
        <div className='Women'>
            <img  src={page2} width="300px" height="200px" className='profile' alt=""  />
            <div className='text1' ><h2>Women collections</h2>
            <p>Buy our products with good quility and our <br /> products very resposive products</p>
                <p>$30000</p></div>
        </div>
        <div className='pagepart3'>
            <div className='speakers'>
                <img   src={page3} className='play1' width="280px" height="170px" alt="" />
                <div className='text2' >
                <h4>Speakers</h4>
                <p>Buy our products with good quility</p>
                <p>$5000</p>
          </div>
            </div>
            <div className='perfuims'>
                <img src={page4} className='play2'  width="250px" height="170px" alt="" />
                <div className='text3'>
          <h4>Perfuims</h4>
           <p>Buy our products with good quility</p>
           <p>$30000</p>
          </div>
            </div>

        </div>
    </div>
  </div>
    </div>
  )
}

export default Section7