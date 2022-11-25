//React
import React from 'react'
import Mmc from './Apps/Mmc';

//CSS
import './AppMmc.css';

//Components
import ReturnToTitle from './ReturnToTitle';

//APP
const AppMmc = (props) => {

  return (

    <div>

      <div className='mmc-style'>

        <div>
          <ReturnToTitle stageAtual={props.hState} />
        </div>

        <div>
          <Mmc />
        </div>

      </div>
          <p> Como usar :</p>
          <p> O valor mínimo de cada entrada PRECISA ser : 1</p>
          <p> Calcula o valor MMC de 2 até 6 números. </p>
    </div>

  )
}

export default AppMmc;