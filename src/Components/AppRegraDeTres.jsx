//React
import React from 'react'
import AppMainScreen from './AppMainScreen';
import Rtres from './Apps/Rtres';
//CSS
import './AppRegraDeTres.css'
//Components
import ReturnToTitle from './ReturnToTitle';

//APP
const AppRegra = (props) => {

  return (

    <div>
      <div className='regra-style'>
        <div>
            <ReturnToTitle stageAtual={props.hState} />
          </div>
          <div>
            <Rtres />
          </div>
        <p> Como usar :</p>
        <p> O valor mínimo de cada entrada PRECISA ser : 1</p>
      </div>
    </div>

  )
}

export default AppRegra;