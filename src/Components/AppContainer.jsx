//React
import React from 'react';
import { useState } from 'react'

//Components
import AppMainScreen from './AppMainScreen';
import AppMmc from './AppMmc';
import AppRegra from './AppRegraDeTres';

//CSS
import "./AppContainer.css"



const AppContainer = () => {

  const [state, setState] = useState();

  const stateAtual = [ 0,1,2 ];

  const handleState = (e) => {
    setState(e);
  }

  console.log(state);

  return (

    <div>
      <div className='background-app'>
      {state == undefined && <AppMainScreen hState={handleState}/>}
      {state == '1' && <AppMmc hState={handleState}/>}
      {state == '2' && <AppRegra hState={handleState}/>}
      </div>

    </div>

  )
}

export default AppContainer