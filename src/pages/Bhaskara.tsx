import { FC, useState, useEffect } from "react";
import bhaskara from '../icons/math.svg';
import '../styles/Bhaskara.css'

const Indice3: FC = () => {
    const [valorA, setValorA] = useState<string>("");
    const [valorB, setValorB] = useState<string>("");
    const [valorC, setValorC] = useState<string>("");
    const [toggle, setToggle] = useState<boolean>(false);
    const [resultX1, setResultX1] = useState<number>(0);
    const [resultX2, setResultX2] = useState<number>(0);

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

    const calc_bhaskara = (a: string, b: string, c: string): number[] => {
        var valorA = Number(a)
        var valorB = Number(b)
        var valorC = Number(c)


        var delta = Math.pow(valorB, 2) - 4 * valorA * valorC
        if (delta < 0) {
            return [0, 0];
        }
        var x1 = ((-valorB) + (Math.sqrt(delta))) / (2 * valorA)
        var x2 = ((-valorB) - (Math.sqrt(delta))) / (2 * valorA)

        return [x1, x2];
    }

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const resultX1 = calc_bhaskara(valorA, valorB, valorC)[0]
        const resultX2 = calc_bhaskara(valorA, valorB, valorC)[1]
        setResultX1(resultX1)
        setResultX2(resultX2)
        setToggle(true);
    };

    return (
        <section className="container-bhaskara">
            <img className="icon-bhaskara" src={bhaskara} alt="" />
            {windowSize >= Number(769) && <div className="title">Calculadora de Bhaskara</div>}
            <div className="input-container">

                <div className="flex-division">
                    <input
                        className="challenge-input"
                        type="text"
                        placeholder="Valor de A"
                        value={valorA}
                        onChange={(e) => setValorA(e.target.value)}
                    />
                    <input
                        className="challenge-input"
                        type="text"
                        placeholder="Valor de B"
                        value={valorB}
                        onChange={(e) => setValorB(e.target.value)}
                    />
                </div>

                <div className="flex-division">
                    <input
                        className="challenge-input"
                        type="text"
                        placeholder="Valor de C"
                        value={valorC}
                        onChange={(e) => setValorC(e.target.value)}
                    />
                </div>
            </div>
            <button
                className="result-button-bhaskara"
                id="third-challenge-button"
                onClick={buttonHandler}
            >
                Resultado
            </button>
            {toggle === true ? (
                <>
                 {resultX1 !== 0 && resultX2 !== 0 ? 
                    (
                        <div className="result-container">
                            X1 = {(resultX1).toLocaleString(undefined, { maximumFractionDigits: 2 })} | X2 = {(resultX2).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </div>
                    ) : (<div className="result-container">Delta negativo</div>)}
                 </>

            ) : (
                <></>
            )}
        </section>
    );
}

export default Indice3;
