import React, { useState } from 'react'
import './Search.css'
import { restAPI } from './restAPI'
import Result from './Result'

const Body = ({classId,setClassId}) => {
  // const rows =[];
  // for(let i=0;i<6;i++)
  // rows.push(restAPI[i]);

  const [query,setQuery] =useState("")
  if(query===""){
    setQuery("zy")
  }

  const showmanual =(e)=>{
    var curElema = document.getElementById('manualClasses').style.display;
    console.log(curElema);
    if(curElema=='none' || curElema=='')
    document.getElementById('manualClasses').style.display = "block";
    else
    document.getElementById('manualClasses').style.display = "none";
  }

 const redirectResult =(e)=>{
    // console.log(e.target.id);
    var iid =e.target.id;
    var sys =restAPI.filter((user)=>user.id==iid)[0];
    var naam =sys.name;
    var rm =sys.room_no;
    var flr =sys.floor;
    var bld =sys.building;
    var url =sys.url;
    setClassId({iid,naam,rm,flr,bld,url});
    // setClassId(iid);
 }

 //Typewriting animation in search box
 var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span className="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


  return (
    <>
     <div className="search_content">
        
      <div>
        <div className="animTxt">
        <h2 className='animatedTxt'>
            <div className="typewrite" data-period="2000" data-type='[ "Welcome to Mapas.", "Locate your class."]'>
              <span className="wrap"></span>
            </div>
          </h2>
       </div>

       <div className='mainInp'>
          <input className="search" placeholder="Enter Room no./name" type="text" onChange={(e)=> setQuery(e.target.value)}/>
          <ul className='search_filter'>
            { restAPI.filter((user)=>user.room_no.includes(query.toUpperCase()) || user.name.toUpperCase().includes(query.toUpperCase())).slice(0,5).map((user) => {
                if(user.building === "Charak")
              return <a key={user.id} href="#result"><li key={user.name} id={user.id} className='search_element' onClick={redirectResult}>{user.name}</li></a>
                else
              return <a key={user.id} href="#result"><li key={user.name} id={user.id} className='search_element' onClick={redirectResult}>{user.room_no}</li></a>
            })}
          </ul>
       </div>

      <div className="manualSrch">
        <p>OR</p>
        <button onClick={showmanual}>Manual</button>
      </div>
      
      <div id="manualClasses">
        <p>Available Rooms with Codes</p>
        <div className="classMenuList">
            <div className="currBuilding"><p>VEDANTA: </p>
            { restAPI.filter((user)=>user.building=='Vedanta').map((user)=>{
                return <a key={user.id} href="#result"><button id={user.id} onClick={redirectResult}>{user.room_no}</button></a>
            })}
            </div>

            <div className="currBuilding"><p>VASTU: </p>
            { restAPI.filter((user)=>user.building=='Vastu').map((user)=>{
                return <a key={user.id} href="#result"><button id={user.id} onClick={redirectResult}>{user.room_no}</button></a>
            })}
            </div>

            <div className="currBuilding"><p>CHARAK: </p>
            { restAPI.filter((user)=>user.building=='Charak').map((user)=>{
                return <a key={user.id} href="#result"><button id={user.id} onClick={redirectResult}>{user.name}</button></a>
            })}
            </div>

            <div className="currBuilding"><p>WORKSHOP: </p>
            { restAPI.filter((user)=>user.building=='WorkShop').map((user)=>{
                return <a key={user.id} href="#result"><button id={user.id} onClick={redirectResult}>{user.room_no}</button></a>
            })}
            </div>

            <div className="currBuilding"><p>VISVESVARAYA: </p>
            { restAPI.filter((user)=>user.building=='Visvesvaraya').map((user)=>{
                return <a key={user.id} href="#result"><button id={user.id} onClick={redirectResult}>{user.room_no}</button></a>
            })}
            </div>
        </div>

      </div>

      </div>
     </div>
    </>
  )
}

export default Body