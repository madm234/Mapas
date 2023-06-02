import React from 'react'
import './Vishverya.css'
import './Vish.css'
import Build from '../Build_hov'
import { useState } from 'react'

const Vishverya = () => {
        const azure =(event)=>{
                let ied = event.currentTarget.id;
                if(ied in floor_desc){
                    // setFloorId(ied);
                    setcurrCont({
                        no : floor_desc[ied][0],
                        tot : floor_desc[ied][1] 
                    })
        
                    for(let i=0;i<document.querySelectorAll(".hovCont_box").length;i++){
                        if(document.querySelectorAll(".hovCont_box")[i].parentElement.id === ied)
                            document.querySelectorAll(".hovCont_box")[i].style.display = 'flex';
                        else
                            document.querySelectorAll(".hovCont_box")[i].style.display = 'none';
                    }
                }
               
            }
        
            const[currCont,setcurrCont] = useState('');
            const floor_desc = {
                vi_ground : ['G','Structure, Cement Concrete & Building Material Lab, Soil Mechanics Lab, EnvironmentLab, Transport Lab, Fluid Mechanics Lab'],
                vi_1 : ['1','HoD-Department of Petroleum Engineering, Reservoir Engineering & Product Testing Lab, Drilling Fluid & Cement Lab, Seminar Hall, Lecture Hall, Tutorial Rooms 1&2'],
                vi_2 : ['2','Head of the department, Civil Engineering, Geology & Survey Lab, Computer Lab1, Drawing Hall'],
                vi_3 : ['3','Buisness Analytics Lab Mb304'],
                vi_4 : ['4','MBA Faculty Cabins, Civil Library'],
                vish_floor5 : ['5','HOD MBA Cabin, Classrooms, MBA Activity Room, Seminar Hall'],
            }

  return (
    <>
       <div className="vish_desc">
       <ul>
            {/* 5th floor */}
            <li className="vish_floor" id='vish_floor5' onClick={azure}>
            <Build floor={currCont['tot']} num={currCont['no']} buildName={'Vish'}/>

                <div className="v_roof">
                        <div className="roof_railing"></div>
                        <div className="roof_railing_side"></div>
                </div>
            <div className="roof_railing" id='mid_roof'>
                <p className='vish_name'>VISVESVARAYA</p>
            </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='down'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
               
                <div className='v_floor_side'>
                <div className="v_roof_side">
                        <div className="roof_railing"></div>
                </div>
                <div className="roof_railing" id='mid_roof'></div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='down'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>            
                </div>

                <div className="last_end_vblock">
                    <div className="roof_railing"></div>
                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>
                    
                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>

                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>
                    
                
                </div>
                </div>
            </li>

            {/* 4th floor */}
            <li className="vish_floor" id='vi_4' onClick={azure}>
            <Build floor={currCont['tot']} num={currCont['no']} buildName={'Vish'}/>

                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='down'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>

                <div className='v_floor_side'>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='down'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>

                <div className="last_end_vblock">
                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>
                    
                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>

                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>
                    
                
                </div>
                </div>
            </li>

            {/* 3rd floor */}
            <li className="vish_floor" id='vi_3' onClick={azure}>
            <Build floor={currCont['tot']} num={currCont['no']} buildName={'Vish'}/>

                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='down'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>

                <div className='v_floor_side'>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='down'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>

                <div className="last_end_vblock">
                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>
                    
                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>

                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>
                    
                
                </div>
                </div>
            </li>

            {/* 2nd floor */}
            <li className="vish_floor" id='vi_2' onClick={azure}>
            <Build floor={currCont['tot']} num={currCont['no']} buildName={'Vish'}/>

                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='down'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>

                <div className='v_floor_side'>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='down'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>

                <div className="last_end_vblock">
                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>
                    
                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>

                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>
                    
                
                </div>
                </div>
            </li>

            {/* 1st floor */}
            <li className="vish_floor" id='vi_1' onClick={azure}>
            <Build floor={currCont['tot']} num={currCont['no']} buildName={'Vish'}/>

                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='down'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>

                <div className='v_floor_side'>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='down'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>

                <div className="last_end_vblock">
                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>
                    
                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>

                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>
                    
                
                </div>
                </div>
            </li>

            {/* ground floor */}
            <li className="vish_floor vish_ground" id='vi_ground' onClick={azure}>
            <Build floor={currCont['tot']} num={currCont['no']} buildName={'Vish'}/>

                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='down'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_block">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>

                <div className='v_floor_side vish_ground'>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='down'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>
                <div className="half_red_sideblock">
                        <div className='vbuild_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                        </div>
                </div>

                <div className="last_end_vblock vish_ground">
                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>
                    
                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>

                    <div className="half_red_block">
                        <div className='vbuild_wind_side'>
                        {/* <div className="wind_stripes_v1"></div> */}
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>
                    
                
                </div>

                </div>
            </li>
        </ul>
       </div>
    </>
  )
}

export default Vishverya