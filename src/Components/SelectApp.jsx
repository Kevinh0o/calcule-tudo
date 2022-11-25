//React
import React from 'react'
import { useState } from 'react'


//CSS
import "./SelectApp.css"

const SelectApp = (props) => {

  const color = props.color;

  return (

    <div>
        <button className='select-app-button' style={{backgroundColor: props.color}}  onClick={() => props.stageAtual(props.stage)}>

            <div className='select-color' style={{backgroundColor: props.color}} >
              <img src={props.icon} />
            </div>

            <div className='select-app-text' style={{backgroundColor: props.color}}>
              {props.text}
            </div>

        </button>
    </div>

  )
}

export default SelectApp