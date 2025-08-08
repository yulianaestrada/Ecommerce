import { useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext";
import FormCheckout from "../FormCheckout/FormCheckout";
import { addDoc, collection } from "firebase/firestore";
import ecommerceOrder from "../../assets/ordenEnviada.png";
import db from "../../db/db.js";
import "./Checkout.css"

const Checkout = ({ saludo }) => {

    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: "",
        date: new Date().toISOString().split('T')[0]
    });

    const [orderId, setOrderId] = useState();

    const { cart, totalPrice } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    }

    const sendOrder = (event) => {
        event.preventDefault();

        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            totalPrice: totalPrice()
        }
        //Subir orden a firestore
        uploadOrder(order);
    }

    const uploadOrder = async (order) => {
        try {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order);

            setOrderId(response.id);
        } catch (error) {
            console.log("Error al subir orden");
        }
    }

    return (
        <div>
            <div className="item-container">
                {saludo}
            </div>
            <div className="checkout">
                {
                    orderId ? (
                        <div className="orden">
                            <img className="orderimg" src={ecommerceOrder} alt="" />
                            <h2 className="orden2">Orden generada correctamente!</h2>
                            <p className="orden3">Guarde el identificador de su orden: {orderId}</p>
                        </div>
                    ) : (
                        <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} sendOrder={sendOrder} />
                    )
                }
            </div>
        </div>
    )
}

export default Checkout
