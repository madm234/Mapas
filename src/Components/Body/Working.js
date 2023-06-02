import React from 'react'
import './Working.css'
import Vedanta from './Building/VED/Vedanta'
import Vastu from './Building/VAS/Vastu'
import Vkrma from './Building/VKRMA/Vkrma'
import Charak from './Building/Charak/Chrk'
import Vishverya from './Building/VISH/Vishverya'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Working = () => {

  var closeBuild =(e)=>{
    // console.log(e.currentTarget);
    document.getElementById("fadeBackground").style.display = "none";
    document.getElementById("working").style.display = "none";
    document.querySelector(".fixBuidButton").style.display = "block";
    document.getElementById('about').style.display = 'block';
    document.body.style['overflow-y'] = 'auto';
  }

  return (
    <>

        <div className="works" id='working'>
            <FontAwesomeIcon id="clsBuildBtn" icon={faCircleXmark} onClick={closeBuild} />

            <div className='work_head'>
            <h3>Buildings</h3>
            <p>Tap floors to get info</p>
            </div>
            {/* <h3 className='work_desc'>[Click on floors to get information]</h3> */}
            
            <div id='buildContainer'>
            {/* Vedanta Building */}
            <div className='vedStyle'>
                <Vedanta />
                <p className='vedp'>Vedanta side-front view</p>
            </div>

            {/* Vastu Building */}
            <div className='vastStyle'>
                <Vastu />
                <p className='vasp'>Vastu back view</p>
            </div>

            <div className="charakStyle">
                <Charak/>
                <p className='charakp'>Charak front view</p>
            </div>

            {/* Vishwakarma Building */}
            {/* <div className='vkrmStyle'>
              <Vkrma />
            </div> */}

            {/* Vishvarya Building */}
            <div className='vishStyle'>
              <Vishverya />
              <p className='colonial'>Visvesvaraya side view</p>
            </div>

            </div>


        </div>
    </>
  )
}

export default Working