//React
import React from 'react'

//CSS
import './AppMainScreen.css'

//Components
import SelectApp from './SelectApp'

//APP
const AppMainScreen = (props) => {

  return (
    
    <div>
      <div className='app-flex-container'>
      <SelectApp text="MMC" stage="1" color='#C8A6FF' icon='https://img.icons8.com/material-sharp/48/null/math.png'  stageAtual={props.hState} />
      <SelectApp text="REGRA DE TRÊS" color='#71F6FF' icon='https://img.icons8.com/material-sharp/48/null/math.png' stage="2" stageAtual={props.hState} />
      <SelectApp text="EM BREVE" color='#F0EFF3' icon='https://img.icons8.com/ios-glyphs/60/null/maintenance.png' />
      </div>



    </div>
  )
}

export default AppMainScreen