import React from 'react'
import './Result.css'
import Vedanta from './Building/VED/Vedanta'
import Charak from './Building/Charak/Chrk'
import Vastu from './Building/VAS/Vastu'
import Visvesvaraya from './Building/VISH/Vishverya'
import Spline from '@splinetool/react-spline';


const Result = ({classId,setClassId}) => {
  // useEffect(() => {
  //   const script = document.createElement('script');
  
  //   script.src = "https://unpkg.com/@splinetool/viewer@0.9.268/build/spline-viewer.js";
  //   script.type = "module";
  //   script.async = true;
  
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  // console.log(classId);
  // const settin =()=>{
  //   setFloor('fragile');
  // }
  // document.getElementById('modelLoading').style.display ='block';

  const sicko =()=>{
    // document.getElementById('modelLoading').style.display ='none';
  }

  const pubURL = {
   Charak : { '0':'https://my.spline.design/charakg-eca468eec1a5462e6af6d8c3e8114a63/',
              '1':'',
              '2':'https://my.spline.design/charak2-61f97afe25d50e42273905abeda97f65/',
              '3':'https://my.spline.design/charak3-5f27522a8a80b4c9f0fe4e058d259d43/',
              'pic':'https://drive.google.com/file/d/1QwY0skWwvNZgtrzAJRPZ3S6bU7VeyRFw/view?usp=sharing'
            },
   Vedanta :{ '0':'',
              '1':'',
              '2':'https://my.spline.design/untitled-3c1dc3cdf09481ad1102891ea3df936e/',
              '3':'https://my.spline.design/vedanta3-62a3b3c6553e72f7632e6e6bf5024afb/',
              '4':'https://my.spline.design/vedanta3copy-a34f9bedbce191530ce6109f9e44eaf5/',
              '5':'https://my.spline.design/vedanta5-b56a3199d59d7584c3834ed37da65d0c/',
              'pic':'https://drive.google.com/file/d/1peOWaiR1N_7G16Tw83cHysgAuZujmrbE/view?usp=sharing'
            },
   WorkShop :{'0':'',
              '1':'https://my.spline.design/workshop1-d1dc5cea984e46071003be78d58815dd/',
              '2':'https://my.spline.design/workshop2-d3a3da6a6472d9badbdfe5d2cb29ef44/',
              '3':'',
              'pic':'https://drive.google.com/file/d/1KuRiwncLGu7b1n-G2nYFpp18OCt4NA6-/view?usp=sharing'
            },
   Vastu :{ '0':'',
            '1':'https://my.spline.design/vastu1-a5fc9a369f226e1e39f7e1aead3686a7/',
            '2':'https://my.spline.design/vastu2-cde31380ed432f4dcb0a00485a87cfa9/',
            '3':'https://my.spline.design/vastu3-f6742424c04f1c711f893b10b6dfc473/',
            '4':'https://my.spline.design/vastu4-506f737f9877560bc1382c0088ea2630/',
            'pic':'https://drive.google.com/file/d/1ppaUarhXJj68bI55dzgR4Tu8NV1EPbnS/view?usp=sharing'
          },
  Visvesvaraya :{ '0':'https://my.spline.design/vishvesvaraya0-63c85fd8a213010d490186f5bf4ab634/',
            '1':'https://my.spline.design/vishvesvaraya1-5ce5eae53d88c591779d63bdfaeb75ed/',
            '2':'https://my.spline.design/vishvesvaraya2-093b4aca13767ea06dcdfd67adb78470/',
            '3':'https://my.spline.design/vishvesvaraya4-0089fbed60e6f71371be708dfa21308b/',
            '4':'https://my.spline.design/vishvesvaraya4-395b2ae0881b53597de33ff68b7921f5/',
            '5':'https://my.spline.design/vishvesvaraya5-52db0eb445b8028ea78789a115b61374/',
            'pic':'https://drive.google.com/file/d/1OyKwa_lgwFJ0X8pPHwgGK8rQdIFGKWwe/view?usp=sharing'
          },
  }

//   Charak 
//   'pic':'https://drive.google.com/file/d/1TaevYfe4iYYbMxJ4kJDr2NmsPXV6Mf5k/view?usp=sharing'
// Vedanta 
//   'pic':'https://drive.google.com/file/d/1tAx5PHBTpXXCJ3ZrOgvDmzGw8cxaRMdV/view?usp=sharing'
// WorkShop 
//   'pic':'https://drive.google.com/file/d/1y_PQz8FSz5xI5cyKQ5vTjyWcNWhwULnr/view?usp=sharing'
// Vastu 
// 'pic':'https://drive.google.com/file/d/1G1w0BmlDtiszafSzFG6aZo0AlCaSMEh_/view?usp=sharing'
// Visvesvaraya 
// 'pic':'https://drive.google.com/file/d/1G9Vjxt_3Uk05sPcOF6wzCLPWxwCVZ5x6/view?usp=sharing'

  const bldName =classId.bld;
  const bldFloor = classId.flr;
  // const publicURL = pubURL[bldName][bldFloor];

  return (classId!=='')?(
    <>
    <div className="result_cont" id='result'>
      
        <div>
          <div className="result_box">

              <div className='resultFont'>
                        <p><b style={{color: "#eea1fd"}}>Room Name:</b> {classId.naam}</p>
                        <p><b style={{color: "#eea1fd"}}>Room No:</b> {classId.rm}</p>
                        <p><b style={{color: "#eea1fd"}}>Floor:</b> {classId.flr}</p>
                        <p><b style={{color: "#eea1fd"}}>Building:</b> {classId.bld}</p>
                        {/* {console.log(classId.url)} */}
              </div>

              {classId.bld == 'Vedanta' &&
                <div className="resVedanta">
                  <div> <Vedanta /> </div>
                </div>
              }

              {classId.bld == 'Charak' &&
                <div className="resCharak">
                  <div> <Charak /> </div>
                </div>
              }

              {classId.bld == 'Vastu' &&
                <div className='resVastu'>
                  <div> <Vastu /> </div>
                </div>
              }

              {classId.bld == 'Visvesvaraya' &&
                <div className='resVish'>
                  <div> <Visvesvaraya /> </div>
                </div>
              }

              {classId.bld == 'WorkShop' &&
                <div className='resWork'>
                  <div className='workShopImg'><img src="./Images/lazi.jpg" alt="" /><p>Lazy as hell to code workshop building!</p></div>
                </div>
              }

          </div>
        </div>
    </div>

    <div className="result_cont">
    <div className="result_box2">
        {classId.url!==''?
        <>
        <div className="modelInstruct">
        <p id='cloudInst'>Spot the <span>cloud</span> for <span className='frntImgTxt'><img src="./Images/letter-f.png" alt="" /></span>ront or <span className='frntImgTxt'><img src="./Images/letter-b.png" alt="" /></span>ack Entrance to the floor!</p>
        <p style={{display:'block'}} id='modelLoading'>"Keep Paitience. Model takes time to load"</p>
        </div>
        <div className="fullModel"><a target='_blank' rel='noreferrer' href={pubURL[classId.bld]['pic']}><img className='imageSideType' src="./Images/letter-f.png" alt="front-entrance" /></a><a target='_blank' rel='noreferrer' href={pubURL[classId.bld][classId.flr]}><img className='fullScreenImg' src="./Images/expand.png" alt="" /></a></div>
        <Spline scene={classId.url} style={{height:'40rem'}}/>
        </>
        :<><div style={{padding:'4rem'}}>
          <img src='Images/undraw_scientist_ft0o.svg' style={{width: '100%', marginBottom: '2rem'}}></img>
          <h1 style={{fontFamily: 'Montserrat'}}>Working on this model!</h1></div></>}
    </div>
    </div>

  {/* <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.268/build/spline-viewer.js"></script> */}
    </>
  ):(<></>)
}

export default Result