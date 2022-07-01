import { FC, useState, useEffect } from "react";
import ufrgs from '../icons/ufrgs.svg.png';
import '../styles/Indice3.css'

const Indice3: FC = () => {
  const [notaA, setNotaA] = useState<string>("");
  const [notaB, setNotaB] = useState<string>("");
  const [notaC, setNotaC] = useState<string>("");
  const [notaD, setNotaD] = useState<string>("");
  const [notaFF, setNotaFF] = useState<string>("");
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

  const calc_index3 = (a: string, b: string, c: string, d: string, ff: string): number => {
    var numberA = Number(a)
    var numberB = Number(b)
    var numberC = Number(c)
    var numberD = Number(d)
    var numberFF = Number(ff)
    var index_soma = (numberA / 10) + (numberB / 8) + (numberC / 6) + (numberD / 3) + (numberFF)
    var num_notas = numberA + numberB + numberC + numberD + numberFF
    var index3 = num_notas / index_soma

    if(isNaN(index3)) {
      return 0
    }

    return index3;
  }

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const result = calc_index3(notaA, notaB, notaC, notaD, notaFF)
    setResult(result)    
    setToggle(true);
  };

  return (
    <section className="container-i3">
      <img className="icon" src={ufrgs} alt="" />
      {windowSize >= Number(769) && <div className="title">Calculadora de I3</div>}
      <div className="input-container">

        <div className="flex-division">
          <input
            className="challenge-input"
            type="text"
            placeholder="Notas A"
            value={notaA}
            onChange={(e) => setNotaA(e.target.value)}
          />
          <input
            className="challenge-input"
            type="text"
            placeholder="Notas B"
            value={notaB}
            onChange={(e) => setNotaB(e.target.value)}
          />
        </div>

        <div className="flex-division">
          <input
            className="challenge-input"
            type="text"
            placeholder="Notas C"
            value={notaC}
            onChange={(e) => setNotaC(e.target.value)}
          />
          <input
            className="challenge-input"
            type="text"
            placeholder="Notas D"
            value={notaD}
            onChange={(e) => setNotaD(e.target.value)}
          />
        </div>
        <input
          className="challenge-input"
          type="text"
          placeholder="Notas FF"
          value={notaFF}
          onChange={(e) => setNotaFF(e.target.value)}
        />
      </div>
      <button
        className="result-button"
        id="third-challenge-button"
        onClick={buttonHandler}
      >
        Resultado
      </button>

      {toggle === true ? (
        <div className="result-container">I3 = {(result).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      ) : (
        <></>
      )}
    </section>
  );
}

export default Indice3;
