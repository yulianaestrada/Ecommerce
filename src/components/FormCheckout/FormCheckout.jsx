import ecommerceUser from "../../assets/user.png";
import "./FormCheckout.css"

const FormCheckout = ({ handleChangeInput, dataForm, sendOrder }) => {

    return (
        <div>
            <form onSubmit={sendOrder} className="formulario">
                <img className="user" src={ecommerceUser} alt="" />
                <label>Fecha Compra:</label>
                <input type="date" name="date" value={new Date().toISOString().split('T')[0]} onChange={handleChangeInput} className="date" readOnly/>
                <label>Nombre Completo:</label>
                <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} className="fullname" />
                <label>Teléfono de contacto:</label>
                <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} className="phone" />
                <label>Correo Electrónico:</label>
                <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} className="email" />
                <button type="submit" className="enviar">Enviar Compra</button>
            </form>
        </div>
    )
}

export default FormCheckout
