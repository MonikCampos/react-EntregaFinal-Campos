import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
    //Toda la logica para proveer a la aplicacion
    
    const [cart, setCart] = useState([]); //estado glogbal para ser usado en toda la app
    //ver local storage

    const addToCart = (product) => {
        let existe = cart.some((elemento) => elemento.id === product.id);
        if (existe) {
            let newArr = cart.map((elemento) => {
                if (product.id === elemento.id) {
                    return {
                        ...elemento,
                        quantity: product.quantity,
                    };
                } else {
                    return elemento;
                }
            });
            setCart(newArr);
        } else {
            //localStorage.setItem("cart", JSON.stringify(NEWARRAY))
            setCart([...cart, product]);
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const deleteById = (id) => {
        let newArr = cart.filter((elemento) => elemento.id !== id);
        setCart(newArr);
    };

    // Retorna el total/ la cantidad total
    const getTotalQuantity = () => {
        let total = cart.reduce((acc, elemento) => {
            return acc + elemento.quantity
        }, 0)
        return total
    }

    //Retorna el monto total de la compra: precio por cantidad
    const getTotalPrice = () => {
        let total = cart.reduce((acc, elemento) => {
            return acc + (elemento.price * elemento.quantity)
        }, 0)
        return total
    }

    // Retorna la cantidad que hay, dado un ID
    const getQuantityById = (id) => {
        let producto = cart.find((elemento) => elemento.id === +id)
        // elemento.id === +id con el más queda numérico
        // return producto ? producto.quantity : producto
        return producto?.quantity //optional changing, tecnica de rendering
    }
    //estados, vbles y fnes disponibles para toda la app, dentro del arreglo
    let data = {
        cart,
        addToCart,
        clearCart,
        deleteById,
        getTotalQuantity,
        getTotalPrice,
        getQuantityById
    };
    return <CartContext.Provider value={data}>{children}
    </CartContext.Provider>;
};
export default CartContextComponent;