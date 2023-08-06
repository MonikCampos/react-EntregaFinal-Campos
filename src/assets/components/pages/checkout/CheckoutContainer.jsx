import { useContext, useState } from "react";
import { db } from "../../../../firebaseConfig";
import {
    addDoc,
    collection,
    serverTimestamp,
    updateDoc,
    doc,
} from "firebase/firestore";
import { Button } from "@mui/material";
import { CartContext } from "../../../../context/CartContext";
import { Link } from "react-router-dom";

const CheckoutContainer = () => {
    const { cart, clearCart, getTotalPrice } = useContext(CartContext);
    const [orderId, setOrderId] = useState("");
    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: "",
    });
    let total = getTotalPrice();

    const handleSubmit = (evento) => {
        evento.preventDefault();
        let order = {
            buyer: userData,
            items: cart,
            total,
            date: serverTimestamp(),
        };

        // Creación de la orden de compra
        let ordersCollections = collection(db, "orders");
        addDoc(ordersCollections, order).then((res) => setOrderId(res.id));

        // Modifica es stock de los productos
        cart.forEach((elemento) => {
            updateDoc(doc(db, "products", elemento.id), {
                stock: elemento.stock - elemento.quantity,
            });
        });

        // Limpia el carrito
        clearCart();
    };

    const handleChange = (evento) => {
        setUserData({ ...userData, [evento.target.name]: evento.target.value });
    };

    return (
        <div>
            <h2 style={{ backgroundColor: "#7E778C"}}>Checkout</h2>

            {!orderId ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="ingrese su nombre"
                        name="name"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="ingrese su telefono"
                        name="phone"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="ingrese su email"
                        name="email"
                        onChange={handleChange}
                    />
                    <Button variant="contained" type="submit">
                        Comprar
                    </Button>
                </form>
            ) : (
                <>
                <h3>Orden de Compra Número: {orderId}</h3>
                <Link to="/"><Button sx={{  color: "#F2CEDB", border:"none", backgroundColor: "#0E2940" }} size="small" variant="contained">Volver a Productos</Button></Link>
                <h2></h2>
                </>
            )}
        </div>
    );
};

export default CheckoutContainer;