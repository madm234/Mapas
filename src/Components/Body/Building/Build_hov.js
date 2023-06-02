import React from 'react'
import './Build_hov.css'


const Build_hov = (props) => {
  return (
    <>
       {props.buildName==='Other' ?
          <div className="hovCont_box">
          <hr/>
          <p><b>{props.num}</b></p>
          <div>{props.floor}</div>
          </div>
        :
          <div className="hovCont_box vishCont">
          <hr/>
          <p><b>{props.num}</b></p>
          <div>{props.floor}</div>
          </div>
        }
    </>
  )
}

Build_hov.defaultProps ={
    buildName : 'Other'
}

export default Build_hov