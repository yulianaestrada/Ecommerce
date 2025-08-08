import { useEffect } from "react";

const EjemploHolaMundo = () => {

    useEffect(()=> {
        const mostrarTamañoVentana = () =>{
            console.log("Ancho: " + window.innerWidth);
        }

        window.addEventListener("resize",mostrarTamañoVentana);

        return () =>{
            window.removeEventListener("resize",mostrarTamañoVentana);
        }
    },[]);

    return(
        <div>
            <h2>Hola Mundo!</h2>
        </div>
    )
}

export default EjemploHolaMundo