//REACT
import { useState } from "react";

//External
import { lcm } from 'mathjs';

//CSS
import './Button.css';

//Components
import Result from './Result'


const Mmc = () => {

    const [valueA, setValueA] = useState();
    const [valueB, setValueB] = useState();
    const [valueC, setValueC] = useState();

    const [valueD, setValueD] = useState();
    const [valueE, setValueE] = useState();
    const [valueF, setValueF] = useState();

    const [result, setResult] = useState();

    //cuida da mudança de estado do input. coloca os valores do input em outra variavel do tipo [].
    const handleChangeA = (e) => {
        setValueA(e.target.value);
    }
    const handleChangeB = (e) => {
        setValueB(e.target.value);
    }
    const handleChangeC = (e) => {
        setValueC(e.target.value);
    }    
    const handleChangeD = (e) => {
        setValueD(e.target.value);
    }    
    const handleChangeE = (e) => {
        setValueE(e.target.value);
    }    
    const handleChangeF = (e) => {
        setValueF(e.target.value);
    }

    const handleClickRun = () => {
        if( 
            valueA &&
            valueB &&
            valueC &&
            valueD &&
            valueE &&
            valueF >= 1){
            setResult(
                lcm(
                    valueA,
                    valueB,
                    valueC,
                    valueD,
                    valueE,
                    valueF,
                )
            )
        } else{ alert('preencha todos os campos, por favor!') }
    }


    console.log(result);

  return (
    <div>
        <div className="m-buttons">
            <div className="div1m">
            <input type='number'  onChange = {handleChangeA} className="button" />
            </div>

            <div className="div2m">
            <input type='number'  onChange = {handleChangeB} className="button" />
            </div>

            <div className="div3m">
            <input type='number'  onChange = {handleChangeC} className="button" />
            </div>

            <div className="div4m">
            <input type='number'  onChange = {handleChangeD} className="button" />
            </div>
            <div className="div5m">
            <input type='number'  onChange = {handleChangeE} className="button" />
            </div>
            <div className="div6m">
            <input type='number'  onChange = {handleChangeF} className="button" />
            </div>


        </div>

        <div>
            <button onClick = { handleClickRun } className='button-run'> 
                Run 
            </button>
        </div>

        <div className="result">
            <Result FuncResult={result} />
        </div>

    </div>
  )
}

export default Mmc