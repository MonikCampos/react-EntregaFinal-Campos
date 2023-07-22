import { useContext } from "react"
import { CartContext } from "../../../../context/CartContext"
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

    let limpiar = ()=>{
      Swal.fire({
        title: 'seguro quieres eliminar todo ?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'si, limpiar',
        denyButtonText: `No, no limpiar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          clearCart()
          Swal.fire('Carrito eliminado con exito', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('El carrito queda como estaba', '', 'info')
        }
      })
    }

  let total = getTotalPrice();
  return (
    <div style={{ backgroundColor: cart.length > 0 ? "steelblue" : "red" }}>
      <h1>Carrito de Compras</h1>

      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ width: "200px", border: "2px solid steelblue" }}
          >
            <h3>{elemento.title}</h3>
            <h3>{elemento.price}</h3>
            <h4>Cantidad: {elemento.quantity}</h4>
            <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
          </div>
        );
      })}

      {cart.length > 0 && (
        <>
          <button onClick={limpiar}>Limpiar carrito</button>
          <button>Terminar compra</button>
        </>
      )}

      <h2>El total del carrito es : {total} </h2>
    </div>
  );
};

export default CartContainer;