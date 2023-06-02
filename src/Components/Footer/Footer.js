import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <>
        <div className='footCont'>
                
                <div style={{display:'flex', justifyContent:'center', margin:'2rem 0 4rem'}}>
                <img alt='On the way' className='manga' style={{margin:'0 1rem'}} src="Images/catman.gif" />
                <img alt='On the way' className='vanga' style={{margin:'0 1rem'}} src="Images/goku.gif" />
                {/* <hr style={{border:'solid 1px #651061', margin:'0 1rem'}}/> */}
                <div style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
                    <p><b>Yogesh Giri</b></p>
                   <div>
                   <i style={{fontSize:'0.8rem'}}>-Qt</i>
                    <span style={{margin:'0 5px 0 10px'}}> <a className='brandHover' style={{color:'#cf8a0a'}} href="https://www.linkedin.com/in/yogesh-giri-405a04201/"><FontAwesomeIcon icon={faLinkedin} /></a> </span>
                    <span style={{margin:'0 8px 0 0px'}}><a className='brandHover' style={{color:'#cf8a0a'}} href="https://github.com/madm234"><FontAwesomeIcon icon={faGithub} /></a></span>
                    <span><a className='brandHover' style={{color:'#cf8a0a'}} href="https://discord.gg/EZBSeKGwFJ"><FontAwesomeIcon icon={faDiscord} /></a></span>
                   </div>
                </div>
                </div>

               <div style={{textAlign: 'center'}}>
                <p style={{fontSize:'0.8rem', fontWeight:'100', fontFamily:'system-ui'}}>©opyright 2023</p>
                </div>
        </div>
    </>
  )
}

export default footer