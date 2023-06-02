import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
       <nav className="navbar">
        <ul className="nav-ul">
          <li className="redirect-items"><a target='_blank' rel='noreferrer' href="https://drive.google.com/file/d/1JoXpduWKlEpeBBmc-ml_5lZc3rdZODCA/view?usp=sharing">API</a></li>
          <li className="redirect-items"><a href="https://forms.gle/L3ML7eLYwSwoTvx19" target="_blank" rel='noreferrer'>Improvise</a></li>
          <li className="redirect-items"><a href="#about">About</a></li>
        </ul>
      </nav>

      <div className="theme">
        <a target={'_blank'} rel="noreferrer" href="https://github.com/madm234/Mapas"><img src="Images/github_octocat.png" alt="github" width="55px" /></a>
      </div>

      <div className="theme2">
        <a href="https://discord.gg/EZBSeKGwFJ" rel='noreferrer' target={'_blank'}><img id='dicordLogo' src="Images/discord.gif" alt="github" width="65px" /></a>
      </div>
    </>
  )
}

export default Navbar