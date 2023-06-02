import React from 'react'
import './Vedanta.css'
import './Ved.css'
import Build from '../Build_hov'
import { useState } from 'react'

const Vedanta = () => {

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
            // console.log(event);
        }
       
    }

    // const[currFloorId,setFloorId] = useState('');
    const[currCont,setcurrCont] = useState('');
    // const ved_buildy = ['Reception,Dean-School of Computing Office, Admissions Office,Branding and Public Relations Office'];
    const floor_desc = {
        ground : ['G','Reception,Dean-School of Computing Office, Admissions Office,Branding and Public Relations Office'],
        floor1 : ['1','VEDA-The Central Library'],
        floor2 : ['2','Oracle Application Development Lab'],
        floor3 : ['3','IBM Lab'],
        floor4 : ['4','Programming Lab 1, Computer Network Lab, Data Science & Analytics Lab, Research and Development Lab'],
        floor5 : ['5','Computer Centre, Auditorium, Server Room, Computer Vision & Biometrics Lab, Mobile Apps Development Lab, Programming Labs 2,3,4,5'],
    }
 
  return (
    <>
     <div className="vedanta_desc">
                <ul>
                    {/* roof  */}
                    <li id='roof'>  
                    <div className='build_block_left'></div>

                    <div className='side_floor'>
                    <div className="build_block_side"></div>
                        <div className='window' id='r_window'>
                            <div className='fv_line'></div>
                            <div className='sv_line'></div>
                            <div className='fh_line'></div>
                            <div className='sh_line'></div>
                        </div>

                        <div className="roof_side_side">
                            <div className="upper_floor"></div>

                            <div className="build_block_left"></div>
                            <div className="cover_side">
                                <div id='roofia_cvr' className="cvrSide">
                                    {/* <div className="uppercover_floor"></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='base_floor'></div>
                    <div className='upper_floor'></div>
                    {/* <Build floor={currCont.tot} num={currCont.no}/> */}
                    </li>

                    {/* fifth floor  */}
                    <li className='floor' id='floor5' onClick={azure}>  
                    <Build floor={currCont['tot']} num={currCont['no']}/>
                    <div className='build_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    <div className='build_wind_mid'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    <div className='build_wind_right'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    <div className='build_block_left'></div>
                    <div className='build_block_right'></div>

                    <div className='side_floor'>
                        <div className="build_block_side"></div>
                        <div className='build_wind_side'>
                            <div className="wind_stripes_v1"></div>
                            <div className="wind_stripes_v2"></div>
                            <div className="wind_stripes_v3"></div>
                            <div className="wind_stripes_h"></div>
                        </div>

                        <div className='window'>
                            <div className='fv_line'></div>
                            <div className='sv_line'></div>
                            <div className='fh_line'></div>
                            <div className='sh_line'></div>
                        </div>    

                        <div className="last_side">
                            <div className="yellow_paint">
                                <div style={{left:'10%', height:'32%', width:'70%'}} className="build_wind_left"><div className="wind_stripes_v1"></div><div className="wind_stripes_v2"></div><div className="wind_stripes_v3"></div><div className="wind_stripes_h"></div></div>
                            </div>

                            <div style={{left:'0', height:'45%', width:'30%'}} className="build_wind_left">
                                <div className="build_block_left" style={{bottom: '0px', width: '100%', height: '7%'}}></div>    
                            <div className="wind_stripes_v1"></div><div className="wind_stripes_v2"></div><div className="wind_stripes_v3"></div><div className="wind_stripes_h"></div></div>
                            
                            <div style={{height:'20%', width:'20%'}} className="build_block_left"></div>
                            <div className="build_block_left" style={{bottom: '0px', width: '100%', height: '5%'}}></div>

                            <div className="cover_side">
                                <div className="cvrSide"></div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='upper_floor'></div> */}
                    </li>

                    {/* fourth floor */}
                    <li className='floor' id='floor4' onClick={azure}>
                    <Build floor={currCont['tot']} num={currCont['no']}/>
                    <div className='build_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    <div className='build_wind_mid'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    <div className='build_wind_right'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    <div className='build_block_left'></div>
                    <div className='build_block_right'></div>

                    <div className='side_floor'>

                        <div className="build_block_side"></div>

                        <div className='build_wind_side'>
                            <div className="wind_stripes_v1"></div>
                            <div className="wind_stripes_v2"></div>
                            <div className="wind_stripes_v3"></div>
                            <div className="wind_stripes_h"></div>
                        </div>

                        <div className='window'>
                            <div className='fv_line'></div>
                            <div className='sv_line'></div>
                            <div className='fh_line'></div>
                            <div className='sh_line'></div>
                        </div>    

                        <div className="last_side">
                            <div className="yellow_paint">
                                <div style={{left:'10%', height:'32%', width:'70%'}} className="build_wind_left"><div className="wind_stripes_v1"></div><div className="wind_stripes_v2"></div><div className="wind_stripes_v3"></div><div className="wind_stripes_h"></div></div>
                            </div>

                            <div style={{left:'0', height:'45%', width:'30%'}} className="build_wind_left">
                                <div className="build_block_left" style={{bottom: '0px', width: '100%', height: '7%'}}></div>    
                            <div className="wind_stripes_v1"></div><div className="wind_stripes_v2"></div><div className="wind_stripes_v3"></div><div className="wind_stripes_h"></div></div>
                            
                            <div style={{height:'20%', width:'20%'}} className="build_block_left"></div>
                            <div className="build_block_left" style={{bottom: '0px', width: '100%', height: '5%'}}></div>

                            <div className="cover_side">
                                <div className="cvrSide"></div>
                            </div>
                        </div>
                    </div>
                        {/* <div className='upper_floor'></div> */}
                        </li>


                    {/* third floor */}
                    <li className='floor' id='floor3' onClick={azure}>
                    <Build floor={currCont['tot']} num={currCont['no']}/>
                    <div className='build_wind_left'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    <div className='build_wind_mid'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    <div className='build_wind_right'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    <div className='build_block_left'></div>
                    <div className='build_block_right'></div>

                    <div className='side_floor'>

                        <div className="build_block_side"></div>

                        <div className='build_wind_side'>
                            <div className="wind_stripes_v1"></div>
                            <div className="wind_stripes_v2"></div>
                            <div className="wind_stripes_v3"></div>
                            <div className="wind_stripes_h"></div>
                        </div>

                        <div className='window'>
                            <div className='fv_line'></div>
                            <div className='sv_line'></div>
                            <div className='fh_line'></div>
                            <div className='sh_line'></div>
                        </div>

                        <div className="last_side">
                            <div className="yellow_paint">
                                <div style={{left:'10%', height:'32%', width:'70%'}} className="build_wind_left"><div className="wind_stripes_v1"></div><div className="wind_stripes_v2"></div><div className="wind_stripes_v3"></div><div className="wind_stripes_h"></div></div>
                            </div>

                            <div style={{left:'0', height:'45%', width:'30%'}} className="build_wind_left">
                                <div className="build_block_left" style={{bottom: '0px', width: '100%', height: '7%'}}></div>    
                            <div className="wind_stripes_v1"></div><div className="wind_stripes_v2"></div><div className="wind_stripes_v3"></div><div className="wind_stripes_h"></div></div>
                            
                            <div style={{height:'20%', width:'20%'}} className="build_block_left"></div>
                            <div className="build_block_left" style={{bottom: '0px', width: '100%', height: '5%'}}></div>

                            <div className="cover_side">
                                <div className="cvrSide"></div>
                            </div>
                        </div>

                    </div>
                        {/* <div className='upper_floor'></div> */}
                        </li>


                    {/* second floor */}
                    <li className='floor' id='floor2' onClick={azure}>
                    <Build floor={currCont['tot']} num={currCont['no']}/>
                    <div className='build_wind_left'>
                    <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    <div className='build_wind_mid'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    <div className='build_wind_right'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    <div className='build_block_left'></div>
                    <div className='build_block_right'></div>

                    <div className='side_floor'>
                        
                        <div className="build_block_side"></div>

                        <div className='build_wind_side'>
                            <div className="wind_stripes_v1"></div>
                            <div className="wind_stripes_v2"></div>
                            <div className="wind_stripes_v3"></div>
                            <div className="wind_stripes_h"></div>
                        </div>

                        <div className='window'>
                            <div className='fv_line'></div>
                            <div className='sv_line'></div>
                            <div className='fh_line'></div>
                            <div className='sh_line'></div>
                        </div>

                        <div className="last_side">
                            <div className="yellow_paint">
                                <div style={{left:'10%', height:'32%', width:'70%'}} className="build_wind_left"><div className="wind_stripes_v1"></div><div className="wind_stripes_v2"></div><div className="wind_stripes_v3"></div><div className="wind_stripes_h"></div></div>
                            </div>

                            <div style={{left:'0', height:'45%', width:'30%'}} className="build_wind_left">
                                <div className="build_block_left" style={{bottom: '0px', width: '100%', height: '7%'}}></div>    
                            <div className="wind_stripes_v1"></div><div className="wind_stripes_v2"></div><div className="wind_stripes_v3"></div><div className="wind_stripes_h"></div></div>
                            
                            <div style={{height:'20%', width:'20%'}} className="build_block_left"></div>
                            <div className="build_block_left" style={{bottom: '0px', width: '100%', height: '5%'}}></div>

                            <div className="cover_side">
                                <div className="cvrSide"></div>
                            </div>
                        </div>
                    </div>
                        {/* <Build floor={ved_buildy[0]} num={floor_num[0]}/> */}
                        {/* <div className='upper_floor'></div> */}
                        </li>


                    {/* first floor */}
                    <li className='floor' id='floor1' key='1' onClick={azure}> 
                    <Build floor={currCont['tot']} num={currCont['no']}/>
                    <div className='build_wind_left'>
                    <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    <div className='build_wind_mid'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    <div className='build_wind_right'>
                        <div className="wind_stripes_v1"></div>
                        <div className="wind_stripes_v2"></div>
                        <div className="wind_stripes_v3"></div>
                        <div className="wind_stripes_h"></div>
                    </div>

                    <div className="build_name"><b>Vedanta</b></div>

                    <div className='side_floor'>

                        <div className="side_build_name"></div>

                        <div className='build_wind_side'>
                            <div className="wind_stripes_v1"></div>
                            <div className="wind_stripes_v2"></div>
                            <div className="wind_stripes_v3"></div>
                            <div className="wind_stripes_h"></div>
                        </div>

                        <div className='window'>
                            <div className='fv_line'></div>
                            <div className='sv_line'></div>
                            <div className='fh_line'></div>
                            <div className='sh_line'></div>
                        </div>

                        <div className="last_side">
                            <div className="yellow_paint">
                                <div style={{left:'10%', height:'32%', width:'70%'}} className="build_wind_left"><div className="wind_stripes_v1"></div><div className="wind_stripes_v2"></div><div className="wind_stripes_v3"></div><div className="wind_stripes_h"></div></div>
                            </div>

                            <div style={{left:'0', height:'45%', width:'30%'}} className="build_wind_left">
                                <div className="build_block_left" style={{bottom: '0px', width: '100%', height: '7%'}}></div>    
                            <div className="wind_stripes_v1"></div><div className="wind_stripes_v2"></div><div className="wind_stripes_v3"></div><div className="wind_stripes_h"></div></div>
                            
                            <div style={{height:'20%', width:'20%'}} className="build_block_left"></div>
                            <div className="build_block_left" style={{bottom: '0px', width: '100%', height: '5%'}}></div>

                            <div className="cover_side">
                                <div className="cvrSide"></div>
                            </div>
                        </div>

                        <div className="Libside">
                            <div style={{top:'0',width:'100%',height:'10%'}} className="build_block_left"></div>
                        </div>
                    </div>
                        </li>


                    {/* ground floor */}
                    <li id='ground' onClick={azure}> 
                    <Build floor={currCont['tot']} num={currCont['no']}/>
                    <div id='groundToground' className='side_floor'><div className='window' id='g_window'>
                            <div className='fv_line'></div>
                            <div className='sv_line'></div>
                            <div className='fh_line'></div>
                            <div className='sh_line'></div>
                        </div>

                        <div className="GLibside">
                            <div style={{left:'50%', transform:'translate(-50%)'}} className="vas_sing_win"><div className="wind_stripes_v1"></div><div className="wind_stripes_v2"></div><div className="wind_stripes_v3"></div><div className="wind_stripes_h"></div></div>
                        </div>
                        
                        <div className="last_side">
                            <div className="yellow_paint">
                                <div style={{left:'10%', height:'32%', width:'70%'}} className="build_wind_left"><div className="wind_stripes_v1"></div><div className="wind_stripes_v2"></div><div className="wind_stripes_v3"></div><div className="wind_stripes_h"></div></div>
                            </div>

                            <div style={{left:'0', height:'45%', width:'30%'}} className="build_wind_left">
                                <div className="build_block_left" style={{bottom: '0px', width: '100%', height: '7%'}}></div>    
                            <div className="wind_stripes_v1"></div><div className="wind_stripes_v2"></div><div className="wind_stripes_v3"></div><div className="wind_stripes_h"></div></div>
                            
                            <div style={{height:'20%', width:'20%'}} className="build_block_left"></div>
                            <div className="build_block_left" style={{bottom: '0px', width: '100%', height: '5%'}}></div>

                        </div>
                    </div>
                        
                        <div className='covering'></div>

                        <div className="pillar" id='p1'>
                            <div className="side_pillar"></div>
                        </div>

                        <div className="pillar" id='p2'>
                            <div className="side_pillar"></div>
                        </div>

                        <div className="pillar" id='p3'>
                            <div className="side_pillar"></div>
                        </div>

                        <div className="pillar" id='p4'>
                            <div className="side_pillar"></div>
                        </div>

                        <div className="pillar" id='p5'>
                            <div className="side_pillar"></div>
                        </div>
                        {/* <div className='bottom_floor'></div> */}
                        </li>
                </ul>
            </div>

            {/* <button>Vedanta</button> */}
    </>
  )
}

export default Vedanta