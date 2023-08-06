import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";
import { CartContext } from "../../../../context/CartContext";
import { Link } from "react-router-dom";

const FormFormik = () => {
    const { cart, clearCart, getTotalPrice } = useContext(CartContext);
    const [orderId, setOrderId] = useState("");
    let total = getTotalPrice();

    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
        },
        onSubmit: (data) => {

            let order = {
                buyer: data,
                items: cart,
                total,
                date: serverTimestamp(),
            };
            //crea la orden de compra
            let ordersCollections = collection(db, "orders");
            addDoc(ordersCollections, order).then((res) => setOrderId(res.id));

            // Modifica el stock de los productos
            cart.forEach((elemento) => {
                updateDoc(doc(db, "products", elemento.id), {
                    stock: elemento.stock - elemento.quantity,
                });
            });
            
            // Limpia el carrito
            clearCart();
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("El nombre es obligatorio")
                .min(3, "Debe tener al menos 3 caracteres"),
                //.max(15) 
            email: Yup.string()
                .email("No corresponde a un email valido")
                .required("El email es obligatorio"),
            phone: Yup.string().required("El teléfono es obligatorio"),
        }),
        validateOnChange: false,
    });

    return (
        <div style={{ padding: "40px", backgroundColor:  '#f2cedb' }}>
            {
                !orderId ? <form onSubmit={handleSubmit}>
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        name="name"
                        onChange={handleChange}
                        error={errors.name ? true : false}
                        helperText={errors.name}
                    />
                    <TextField
                        type="text"
                        label="Teléfono"
                        variant="outlined"
                        name="phone"
                        onChange={handleChange}
                        error={errors.phone ? true : false}
                        helperText={errors.phone}
                    />
                    <TextField
                        type="text"
                        label="Email"
                        variant="outlined"
                        name="email"
                        onChange={handleChange}
                        error={errors.email ? true : false}
                        helperText={errors.email}
                    />
                    <Button type="submit" sx={{  color: "#F2CEDB", border:"none", backgroundColor: "#0E2940" }} size="small" variant="contained">
                        Enviar
                    </Button>
                </form> : 
                <>
                    <h3>Orden de Compra Número: {orderId}</h3>
                    <Link to="/"><Button type="button" sx={{  color: "#F2CEDB", border:"none", backgroundColor: "#0E2940" }} size="small" variant="contained">Volver a Productos</Button></Link>
                    <h2></h2>
                </>
            }
        </div>
    );
};

export default FormFormik;