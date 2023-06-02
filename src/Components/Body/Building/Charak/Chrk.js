import React from 'react'
import './Chrk.css'
import './Charak.css'
import Build from '../Build_hov'
import { useState } from 'react'

const Chrk = () => {

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
        chrk_ground : ['G','Director, HOD, Pharmaceutical Chemistry Lab-1, Pharmaceutical Chemistry Lab-2, Lecture Hall-5, Lecture Hall-6, Discussion Room'],
        chrk_floor1 : ['1','Lecture Hall-2, Pharmaceutics Lab-1, Pharmacology Lab-1, Pharmacology Lab-4, Pharmacognosy Lab-1'],
        chrk_floor2 : ['2','Pharmaceutics Lab-2, Pharmaceutical Analysis Lab, Balance Room, Store-2, Central Instrumentation Room, Lecture Hall-3'],
        chrk_floor3 : ['3','Pharmacology Lab-2, Pharmacology Lab-3, Microbiology Lab, Pharmaceutics Lab-3, Museum & Pharmacy Practice Lab, Lecture Hall-4'],
        chrk_floor4 : ['4','Girls Common Room, Boys Common Room']
        }
        
  return (
    <>
    
    <div className="charak_cont">
        <ul>
        <li className="ch_first_floor ch_floor" id='chrk_floor4' onClick={azure}>
        <Build floor={currCont['tot']} num={currCont['no']}/>

          <div className="chrk_roof"></div>
        
        {/* <div className="ch_right_side"></div> */}
        <div className="roof_temp"></div>
        <div className="roof_tempHalf"></div>

        <div className="build_wind_side chrk_wnd1">
        <div className="wind_stripes_v1">
        </div>
        <div className="wind_stripes_v2">
        </div>
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>

        <div className="chrk_wndMid">
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>

        <div className="build_wind_side chrk_wnd2">
        <div className="wind_stripes_v1">
        </div>
        <div className="wind_stripes_v2">
        </div>
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>


        <div className="chrk_side last_floor_side">
        
        <div className="roof_tempHalf"></div>

        <div className="chrk_swndMid">
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>

        <div className="build_wind_side chrk_wnd2">
        <div className="wind_stripes_v1">
        </div>
        <div className="wind_stripes_v2">
        </div>
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>    

        <div className="chrk_stair">
   
        <div className="roof_temp">
          <div className="chrk_stair_roof"></div>
        </div>

        {/* Stair Big Window */}
        <div className="window chrk_win1">
        <div className="sv_line"></div>
        <div className="fh_line"></div>
        </div>

        <div className="chrk_side_view">
        <div className="chrk_wndMid">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid2">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid3">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid4">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>
                
            <div className="roof_temp"></div>
        </div>

        </div>

        </div>
        </li> 
        




        <li className="ch_second_floor ch_floor" id='chrk_floor3' onClick={azure}>
        <Build floor={currCont['tot']} num={currCont['no']}/>
            
        <div className="build_wind_side chrk_wnd1">
        <div className="wind_stripes_v1">
        </div>
        <div className="wind_stripes_v2">
        </div>
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>

        <div className="chrk_wndMid">
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>

        <div className="build_wind_side chrk_wnd2">
        <div className="wind_stripes_v1">
        </div>
        <div className="wind_stripes_v2">
        </div>
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>

        <div className="chrk_side">
        
        
        <div className="chrk_stair">
        
        <div className="chrk_side_view">
                <div className="build_wind_side chrk_svwnd2">
                <div className="wind_stripes_v1">
                </div>
                <div className="wind_stripes_v2">
                </div>
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid2">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid3">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid4">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>
        </div>

         {/* Stair Big Window */}
         <div className="window chrk_win">
        <div className="sv_line"></div>
        <div className="fh_line"></div>
        <div className="sh_line"></div>
        </div>
        </div>
        
        
        <div className="chrk_swndMid">
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>

        <div className="build_wind_side chrk_wnd2">
        <div className="wind_stripes_v1">
        </div>
        <div className="wind_stripes_v2">
        </div>
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
            
        </div>
        
        </div>            
        </div>
        </li> 
        




        <li className="ch_third_floor ch_floor" id='chrk_floor2' onClick={azure}>
        <Build floor={currCont['tot']} num={currCont['no']}/>
            
        <div className="build_wind_side chrk_wnd1">
        <div className="wind_stripes_v1">
        </div>
        <div className="wind_stripes_v2">
        </div>
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>

        <div className="chrk_wndMid">
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>

        <div className="build_wind_side chrk_wnd2">
        <div className="wind_stripes_v1">
        </div>
        <div className="wind_stripes_v2">
        </div>
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>

        <div className="chrk_side">
        
        <div className="chrk_stair">

        <div className="chrk_side_view">
                <div className="build_wind_side chrk_svwnd2">
                <div className="wind_stripes_v1">
                </div>
                <div className="wind_stripes_v2">
                </div>
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid2">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid3">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid4">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>
        </div>

           {/* Stair Big Window */}
        <div className="window chrk_win">
        <div className="sv_line"></div>
        <div className="fh_line"></div>
        <div className="sh_line"></div>
        </div>  
        </div>
        
        <div className="chrk_swndMid">
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>

        <div className="build_wind_side chrk_wnd2">
        <div className="wind_stripes_v1">
        </div>
        <div className="wind_stripes_v2">
        </div>
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>    
        </div>
        </li> 
        






        <li className="ch_fourth_floor ch_floor" id='chrk_floor1' onClick={azure}>
        <Build floor={currCont['tot']} num={currCont['no']}/>
           
        <div className="build_wind_side chrk_wnd1">
        <div className="wind_stripes_v1">
        </div>
        <div className="wind_stripes_v2">
        </div>
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>

        <div className="chrk_wndMid">
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>

        <div className="build_wind_side chrk_wnd2">
        <div className="wind_stripes_v1">
        </div>
        <div className="wind_stripes_v2">
        </div>
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>           
           
        <div className="chrk_side">
        
        <div className="chrk_stair">

        <div className="chrk_side_view">
                <div className="build_wind_side chrk_svwnd2">
                <div className="wind_stripes_v1">
                </div>
                <div className="wind_stripes_v2">
                </div>
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid2">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid3">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid4">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>
        </div>

           {/* Stair Big Window */}
        <div className="window chrk_win">
        <div className="sv_line"></div>
        <div className="fh_line"></div>
        <div className="sh_line"></div>
        </div>  
        </div>
        
            <p>CHARAK</p>
            <div className="chrk_swndMid">
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>

        <div className="build_wind_side chrk_wnd2">
        <div className="wind_stripes_v1">
        </div>
        <div className="wind_stripes_v2">
        </div>
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>     
        </div>
            <p>Faculty of Pharmacy</p>
        </li> 
        





        <li className="ch_fifth_floor ch_floor" id='chrk_ground' onClick={azure}>
        <Build floor={currCont['tot']} num={currCont['no']}/>

        <div className="temp_room">
            
        {/* <div className="temp_room_side1"></div> */}
        </div>

        <div className="pillar" id="p1">
        <div className="side_pillar"></div></div>

        <div className="build_wind_side chrk_wnd2">
        <div className="wind_stripes_v1">
        </div>
        <div className="wind_stripes_v2">
        </div>
        <div className="wind_stripes_v3">
        </div>
        <div className="wind_stripes_h">
        </div>
        </div>

        <div className="chrk_side">
        
        <div className="chrk_stair">

        <div className="chrk_side_view">
                <div className="build_wind_side chrk_svwnd2">
                <div className="wind_stripes_v1">
                </div>
                <div className="wind_stripes_v2">
                </div>
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid2">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid3">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>

                <div className="chrk_wndMid4">
                <div className="wind_stripes_v3">
                </div>
                <div className="wind_stripes_h">
                </div>
                </div>
        </div>

           {/* Stair Big Window */}
        <div className="window chrk_win">
        <div className="sv_line"></div>
        <div className="fh_line"></div>
        <div className="sh_line"></div>
        </div>  
        </div>
        
        </div>
       
        </li> 
        </ul>    
    </div>

    </>
  )
}

export default Chrk