import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {

    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        //un solo estado para todos los valores de los imput
        name: "",
        lastName: "",
    });

    const funcionDelFormulario = (evento) => {
        evento.preventDefault();
        // AXIOS.POST("dasdasdas", userData) conexion con la api
        console.log(userData);
        // ACA QUIERO VOLVER AL HOME
        navigate("/")
    };

    const funcionDeLosInput = (evento) => {
        setUserData({ ...userData, [evento.target.name]: evento.target.value });
    };

    return (
        <div>
            <h1>Checkout</h1>
            <form onSubmit={funcionDelFormulario}>
                <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    name="name"
                    onChange={funcionDeLosInput}
                />
                <input
                    type="text"
                    placeholder="Ingrese su apellido"
                    name="lastName"
                    onChange={funcionDeLosInput}
                />
                <br></br>
                <button type="submit">Enviar</button>
                <button type="button">Cancelar</button>
            </form>
        </div>
    );
};

export default CheckoutContainer;