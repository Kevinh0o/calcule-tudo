//React
import { useState } from "react"

//Externo
import { evaluate } from "mathjs";
//CSS
//Components
import Result from "./Result";

const Rtres = () => {

    const [valueA, setValueA] = useState();
    const [valueB, setValueB] = useState();
    const [valueC, setValueC] = useState();
    const [result, setResult] = useState();


    const colectValueA = (e) => {
        setValueA(e.target.value)
    }
    const colectValueB = (e) => {
        setValueB(e.target.value)
    }
    const colectValueC = (e) => {
        setValueC(e.target.value)
    }

    const handleClickRun = () =>{
        let scope = {
            a : valueA,
            b : valueB,
            c : valueC,
       }
        const exp = evaluate('(b * c) / a', scope);
        console.log(exp);
        setResult(exp);
    }

  return (
    <div >

        <div className="r-buttons">
            
            <div className="div1">
                <input type='number' onChange={colectValueA} className="button"/>
            </div>

            <div className="div2">
                <input type='number' onChange={colectValueB} className="button"/>
            </div>

            <div className="div3">
                <input type='number' onChange={colectValueC} className="button"/>
            </div>

            <div className="div4"> 
                <div> X </div> 
            </div>

        </div>

        <button onClick={handleClickRun} className='button-run'>
             RUN 
        </button>

        <div className="result">
            <Result FuncResult={result}/>
        </div>
    </div>
  )
}

export default Rtres