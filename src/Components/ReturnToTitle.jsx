//React
//CSS
import './ReturnToTitle.css';

const ReturnToTitle = (props) => {
  return (

    <div>
        <button onClick={()=> props.stageAtual(undefined)} className='ReturnToTitle-b'>
            Voltar
        </button>
    </div>

  )
}

export default ReturnToTitle;