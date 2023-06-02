import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Body/Search'
import Result from './Components/Body/Result'
import Working from './Components/Body/Working'
import About from './Components/Body/About'
import Footer from './Components/Footer/Footer'
// import VedRoom from './Components/Body/VedRoom'
import { useState } from 'react'
import './App.css'

function App() {

  const[classId,setClassId] = useState('');

  const showBuild =()=>{
     document.getElementById('working').style.display = 'block';
     document.getElementById('fadeBackground').style.display = 'block';
     document.querySelector('.fixBuidButton').style.display = 'none';
     document.getElementById('about').style.display = 'none';
     document.body.style['overflow-y'] = 'hidden';
  }

  return (
   <>
     <div className="main">

      <div id="fadeBackground"></div>
      <div style={{cursor: 'default'}} className="fixBuidButton" onClick={ showBuild }>
        <p>Buildings</p>
      </div>

     <Navbar />
      <Search classId={classId} setClassId={setClassId}/>
     </div>
     <Result classId={classId} setClassId={setClassId}/>
     {/* <VedRoom /> */}
     <Working />
      <About />
      <Footer />
   </>
  );
}

export default App;
