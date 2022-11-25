//react
import React from 'react';

//CSS
import './StartScreenHeader.css'

const StartScreenHeader = () => {
  return (

    <div className='flex-container'> 
        <div className='h-button-kevi'>
            <a href='https://www.kevi.site'>
              kevi.site
            </a>
        </div>

        <div className='h-button'>CALCULE TUDO!</div>

          <div>
          <button class="cta">
            <span>Me compra um café? ☕</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
          </div>

    </div>

  )
}

export default StartScreenHeader