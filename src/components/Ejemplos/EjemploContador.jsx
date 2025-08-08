import { useState, useEffect } from "react"
import EjemploHolaMundo from "./EjemploHolaMundo";

const EjemploContador = () => {
    const [contador, setContador] = useState(1);
    const [toggle, setToggle] = useState(true);

    console.log("re renderizar del componente");

    const aumentar = () => {
        setContador(contador + 1);
    }

    const cambiarToggle = () => {
        setToggle(!toggle)
    }

    //se ejcuta solo en el montaje, es decir, llamadas APIs, manejar eventos con eventListener
    useEffect(()=> {
        console.log("1er UseEffect");
    }, []);

    //se ejecuta en el montaje y cada vez que mi variable contador se actualiza, es decir, para realizar acciones especificas cuando
    //una variable cambie el valor

    useEffect(()=> {
        console.log("2 useEffect");
    }, [contador]);

    //se ejecuta en el montaje y cada vez que se actualice cualquier estado de mi componente
    useEffect(()=> {
        console.log("3 useEffect");
    })

    return (
        <div>
            <div>
                <p>{contador}</p>
                <button onClick={aumentar}>+</button>
            </div>
            <div>
                <p>Valor Toogle: {toggle.toString()}</p>
                <button onClick={cambiarToggle}>Alternar valor toogle</button>
                {toggle && <EjemploHolaMundo/>}
            </div>
        </div>
    )
}

export default EjemploContador