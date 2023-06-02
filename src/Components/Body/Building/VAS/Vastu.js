import React from 'react'
import './Vastu.css'
import './Vas.css'
import Build from '../Build_hov'
import { useState } from 'react'

const Vastu = () => {

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
            // setTimeout(()=>{
            // document.querySelectorAll(".boxom").style.display = 'none';
            // },2000)
        }
       
    }

    // const[currFloorId,setFloorId] = useState('');
    const[currCont,setcurrCont] = useState('');
    // const ved_buildy = ['Reception,Dean-School of Computing Office, Admissions Office,Branding and Public Relations Office'];
    const floor_desc = {
        vas_ground : ['G','Director, School of Architecture and Design, Office, Computer Lab, Seminar Hall, Display Gallery, Model Making Workshop'],
        vas_floor1 : ['1','Faculty Room, Studio-1, Studio-2, Lecture Hall'],
        vas_floor2 : ['2','Carpentry Workshop, Climatology Lab, Studio-3, Studio-4, Lecture Hall, Faculty Room'],
        vas_floor3 : ['3','Design Studio-1, Studio-5, Studio-6, Lecture Hall, Material Museum'],
        vas_floor4 : ['4','Design Studio-2, Studio-7, Studio-8, Girls Common Restroom, Faculty Restroom, HOD, Surveying Lab, Library, Art Studio, Office Dean'],
    }

  return (
    <>
       <div className="vastu_desc">
            <ul>
                {/* roof */}
                {/* <li className="vas_floor">
                <div className="build_wind_left"></div>
                </li> */}
            <li className="vas_floor vas_downfloor vas_ground_fl" id='vas_floor4' onClick={azure}>
            <Build floor={currCont['tot']} num={currCont['no']}/>

            <div className="vas_sing_win">
                    <div className="wind_stripes_v1"></div>
                    <div className="wind_stripes_v2"></div>
                    <div className="wind_stripes_v3"></div>
                    <div className="wind_stripes_h"></div>
                    <div className="vas_win_first"></div>
                </div>

                <div className="vas_sing_win">
                    <div className="wind_stripes_v1"></div>
                    <div className="wind_stripes_v2"></div>
                    <div className="wind_stripes_v3"></div>
                    <div className="wind_stripes_h"></div>
                    <div className="vas_win_second"></div>
                </div>

                <div className="vas_sing_win">
                    <div className="wind_stripes_v1"></div>
                    <div className="wind_stripes_v2"></div>
                    <div className="wind_stripes_v3"></div>
                    <div className="wind_stripes_h"></div>
                </div>

                
                <div className="vas_sing_win">
                    <div className="wind_stripes_v1"></div>
                    <div className="wind_stripes_v2"></div>
                    <div className="wind_stripes_v3"></div>
                    <div className="wind_stripes_h"></div>
                    <div className="vas_win_third"></div>
                </div>

                
                <div className="vas_sing_win">
                    <div className="wind_stripes_v1"></div>
                    <div className="wind_stripes_v2"></div>
                    <div className="wind_stripes_v3"></div>
                    <div className="wind_stripes_h"></div>
                </div>

                
                <div className="vas_sing_win">
                    <div className="wind_stripes_v1"></div>
                    <div className="wind_stripes_v2"></div>
                    <div className="wind_stripes_v3"></div>
                    <div className="wind_stripes_h"></div>
                </div>

                
                <div className="vas_sing_win">
                    <div className="wind_stripes_v1"></div>
                    <div className="wind_stripes_v2"></div>
                    <div className="wind_stripes_v3"></div>
                    <div className="wind_stripes_h"></div>
                    <div className="vas_win_lastm"></div>
                </div>

                
                <div className="vas_sing_win">
                    <div className="wind_stripes_v1"></div>
                    <div className="wind_stripes_v2"></div>
                    <div className="wind_stripes_v3"></div>
                    <div className="wind_stripes_h"></div>
                </div>

                
                <div className="vas_sing_win">
                    <div className="wind_stripes_v1"></div>
                    <div className="wind_stripes_v2"></div>
                    <div className="wind_stripes_v3"></div>
                    <div className="wind_stripes_h"></div>
                </div>

                <div className="another_vas_roof">
                    <div className="another_vas_roof2"></div>
                </div>

            <div className="vas_side">
                    <div className="vas_sin_window">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    <div className="half_border_window"></div>


                    <div className="vas_sin_window vas_right_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                        <div className="rand_border"></div>
                    </div>
                    <div className="half_border_window vas_right_bord"></div>
                    <div className="vas_side2">
                                {/* <div className="another_vas_roof2"></div> */}
                                {/* <div className="vas_side2_border"></div> */}
                                <div className="vas_side2_border2"></div>
                                <div className="vas_side2_side">
                                {/* <div className="another_vas_roof2"></div> */}
                                </div>  
                    </div>    
            </div>

            {/* <div className="vas_rooof"></div> */}
            {/* <div className="vas_big_rooof">
            </div> */}
            </li>

                {/* floor3 */}
                <li className="vas_floor" id='vas_floor3' onClick={azure}>
                <Build floor={currCont['tot']} num={currCont['no']}/>

                  <div className="vas_floor3_border"></div>
                    <div className="vas_big_window">
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        
                        <div className="hwind_strip vas_st_1"></div>
                        <div className="hwind_strip vas_st_2"></div>
                        <div className="hwind_strip vas_st_3"></div>
                        <div className="hwind_strip vas_st_4"></div>
                        <div className="hwind_strip vas_st_5"></div>
                    <div className="wind_pillar"></div>
                    <div className="wind_pillar pillar2"></div>
                    </div>

                    <div className="vas_sin_window">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    <div className="half_border_window"></div>

                    <div className="half_border_window2 half_border_winow">
                    <div className="vas_sin_window ar1">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    <div className="vas_sin_window ar2">
                        {/* <div className="wind_stripes_v1"></div> */}
                        {/* <div className="wind_stripes_v2"></div> */}
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>

                    <div className="half_border_window3 half_border_winow">
                    <div className="vas_sin_window ar1">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    <div className="vas_sin_window ar2">
                        {/* <div className="wind_stripes_v1"></div> */}
                        {/* <div className="wind_stripes_v2"></div> */}
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>

                    <div className="vas_side">
                        <div className="vas_side_bord"></div>
                        <div className="vas_sin_window">
                            <div className="wind_stripes_v1"></div>
                            <div className="wind_stripes_v2"></div>
                            <div className="wind_stripes_v3"></div>
                            <div className="wind_stripes_h"></div>
                            
                        </div>
                        <div className="half_border_window"></div>


                        <div className="vas_sin_window vas_right_win">
                            <div className="wind_stripes_v1"></div>
                            <div className="wind_stripes_v2"></div>
                            <div className="wind_stripes_v3"></div>
                            <div className="wind_stripes_h"></div>
                            <div className="rand_border"></div>
                        </div>
                        <div className="half_border_window vas_right_bord"></div>
                        <div className="vas_floor3_border"></div>
                
                        <div className="vas_side2">
                        <div className="vas_side_bord"></div>
                                 <div className="vas_floor3_border"></div>
                                 {/* <div className="vas_side2_border"></div> */}
                                 <div className="vas_side2_border2"></div>
                                    <div className="vas_side2_side" id='vas_elevator'>
                        <div className="vas_side_bord" id='vas_side_bord_noine'></div>
                                         <div className="vas_floor3_border"></div>
                                    </div>          
                        </div>    
                    </div>
                </li>

                {/* floor2*/}
                <li className="vas_floor" id='vas_floor2' onClick={azure}>
                <Build floor={currCont['tot']} num={currCont['no']}/>

                 <div className="vas_big_window vas_win_floor2">
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>
                        <div className="wind_strip"></div>

                        <div className="hwind_strip vas_st_6"></div>
                        <div className="hwind_strip vas_st_7"></div>
                        <div className="hwind_strip vas_st_8"></div>
                        <div className="hwind_strip vas_st_9"></div>

                        <div className="wind_pillar"></div>
                        <div className="wind_pillar pillar2"></div>
                 </div>

                 <div className="vas_sin_window">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    <div className="half_border_window"></div>

                    <div className="half_border_window2 half_border_winow">
                    <div className="vas_sin_window ar1">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    <div className="vas_sin_window ar2">
                        {/* <div className="wind_stripes_v1"></div> */}
                        {/* <div className="wind_stripes_v2"></div> */}
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>

                    <div className="half_border_window3 half_border_winow">
                    <div className="vas_sin_window ar1">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    <div className="vas_sin_window ar2">
                        {/* <div className="wind_stripes_v1"></div> */}
                        {/* <div className="wind_stripes_v2"></div> */}
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>
                    </div>

                 <div className="vas_side">
                         <div className="vas_sin_window">
                            <div className="wind_stripes_v1"></div>
                            <div className="wind_stripes_v2"></div>
                            <div className="wind_stripes_v3"></div>
                            <div className="wind_stripes_h"></div>
                        </div>
                        <div className="half_border_window"></div>


                        <div className="vas_sin_window vas_right_win">
                            <div className="wind_stripes_v1"></div>
                            <div className="wind_stripes_v2"></div>
                            <div className="wind_stripes_v3"></div>
                            <div className="wind_stripes_h"></div>
                            <div className="rand_border"></div>
                        </div>
                        <div className="half_border_window vas_right_bord"></div>
                        <div className="vas_side2 vas_side_bod">
                                    {/* <div className="vas_side2_border"></div> */}
                                    <div className="vas_side2_border2"></div>
                                    <div className="vas_side2_side vas_side_bod"></div>          
                        </div>    
                 </div>

                </li>

                {/* floor1 */}
                <li className="vas_floor vas_downfloor" id='vas_floor1' onClick={azure}>
                <Build floor={currCont['tot']} num={currCont['no']}/>

                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                        <div className="vas_win_first"></div>
                    </div>

                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                        <div className="vas_win_second"></div>
                    </div>

                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    
                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                        <div className="vas_win_third"></div>
                    </div>

                    
                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    
                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    
                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                        <div className="vas_win_lastm"></div>
                    </div>

                    
                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    
                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    
                <div className="vas_side">
                         <div className="vas_sin_window">
                            <div className="wind_stripes_v1"></div>
                            <div className="wind_stripes_v2"></div>
                            <div className="wind_stripes_v3"></div>
                            <div className="wind_stripes_h"></div>
                        </div>
                        <div className="half_border_window"></div>


                        <div className="vas_sin_window vas_right_win">
                            <div className="wind_stripes_v1"></div>
                            <div className="wind_stripes_v2"></div>
                            <div className="wind_stripes_v3"></div>
                            <div className="wind_stripes_h"></div>
                            <div className="rand_border"></div>
                        </div>
                        <div className="half_border_window vas_right_bord"></div>
                        <div className="vas_side2 vas_side_bod">
                                    {/* <div className="vas_side2_border"></div> */}
                                    <div className="vas_side2_border2"></div>
                                    <div className="vas_side2_side vas_side_bod"></div>          
                        </div>    
                </div>
                </li>

                {/* ground */}
                <li className="vas_floor vas_downfloor vas_ground_fl" id='vas_ground' onClick={azure}>
                <Build floor={currCont['tot']} num={currCont['no']}/>

                <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                        <div className="vas_win_first"></div>
                    </div>

                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                        <div className="vas_win_second"></div>
                    </div>

                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    
                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                        <div className="vas_win_third"></div>
                    </div>

                    
                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    
                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    
                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                        <div className="vas_win_lastm"></div>
                    </div>

                    
                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    
                    <div className="vas_sing_win">
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>


                <div className="vas_side">
                         <div className="vas_sin_window">
                            <div className="wind_stripes_v1"></div>
                            <div className="wind_stripes_v2"></div>
                            <div className="wind_stripes_v3"></div>
                            <div className="wind_stripes_h"></div>
                        </div>
                        <div className="half_border_window"></div>


                        <div className="vas_sin_window vas_right_win">
                            <div className="wind_stripes_v1"></div>
                            <div className="wind_stripes_v2"></div>
                            <div className="wind_stripes_v3"></div>
                            <div className="wind_stripes_h"></div>
                            <div className="rand_border"></div>
                        </div>
                        <div className="half_border_window vas_right_bord"></div>
                         <div className="vas_side2">
                         {/* <div className="vas_side2_border"></div> */}
                         <div className="vas_side2_border2"></div>

                                    <div className="vas_side2_side"></div>          
                        </div>    
                </div>
                </li>

            </ul>
       </div>
    </>
  )
}

export default Vastu