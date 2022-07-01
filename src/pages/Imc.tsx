import { FC, useState, useEffect } from "react";
import heart from '../icons/imc.svg';
import '../styles/Imc.css'

const Imc: FC = () => {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");  
  const [toggle, setToggle] = useState<boolean>(false);
  const [result, setResult] = useState<number>(0);
   
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
      function updateSize() {
        setSize([window.innerWidth]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  } 

  const [windowSize] = useWindowSize();

  const calc_imc = (peso: string, altura: string): number => {
    var num_peso = Number(peso)
    var num_altura = Number(altura)  
    
    console.log(num_altura , num_peso)

    var imc = num_peso/Math.pow(num_altura,2);

    if(num_altura === 0 || isNaN(imc)) {
      return 0;
    }
    
    return imc;    
  }

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const result = calc_imc(peso, altura)
    setResult(result)    
    setToggle(true);
  };

  return (
    <section className="container-imc">
      <img className="icon" src={heart} alt="" />
      {windowSize >= Number(769) && <div className="title">Calculadora de IMC</div>}
      <div className="input-container-imc">        
          <input
            className="challenge-input"
            type="text"
            placeholder="Digite seu peso (Kg)"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
          <input
            className="challenge-input"
            type="text"
            placeholder="Digite sua altura (m)"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        
      <button
        className="result-button-imc"
        id="third-challenge-button"
        onClick={buttonHandler}
      >
        Resultado
      </button>

      {toggle === true ? (
        <div className="result-container">IMC = {(result).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      ) : (
        <></>
      )}
    </section>
  );
}

export default Imc;
