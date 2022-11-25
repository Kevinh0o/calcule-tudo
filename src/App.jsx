//React
//CSS
import './App.css'

//Components
import StartScreenHeader from './Components/StartScreenHeader'
import HeaderText from './Components/HeaderText'
import AppContainer from './Components/AppContainer'

function App() {

  return (
    <div className='app-container-of-container'>

      <div>
        <StartScreenHeader/>
      </div>

      <div className='flex-container-app'>

        <div className='ad-space'>
        </div>

        <div className='app-container'>
          <HeaderText />
          <AppContainer/>
        </div>

        <div className='ad-space'>
        </div>

      </div>



      
    </div>

  )
}

export default App
