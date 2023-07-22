import { useContext } from "react"
import { CartContext } from "../../../../context/CartContext"
import { Button } from "@mui/material";
// import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

    let limpiar = ()=>{
    //   Swal.fire({
    //     title: 'seguro quieres eliminar todo ?',
    //     showDenyButton: true,
    //     showCancelButton: false,
    //     confirmButtonText: 'si, limpiar',
    //     denyButtonText: `No, no limpiar`,
    //   }).then((result) => {
    //     /* Read more about isConfirmed, isDenied below */
    //     if (result.isConfirmed) {
           clearCart()
    //       Swal.fire('Carrito eliminado con exito', '', 'success')
    //     } else if (result.isDenied) {
    //       Swal.fire('El carrito queda como estaba', '', 'info')
    //     }
    //   })
     }

  let total = getTotalPrice();
  return (
    <div style={{ backgroundColor: cart.length > 0 ? "white" : "red" }}>
      <h2>Carrito de Compras</h2>

      {cart.map((elemento) => {
        return (
          <div className="media p-3" key={elemento.id} style={{ width: "1500px", border: "2px solid #BFA4B3" }}>
        <img src={elemento.img} alt={elemento.title} className="mr-3 mt-3" />
          <div className="media-body">
            <h5>{elemento.title}</h5>
            <h4>Precio: ${elemento.price}</h4>
            <h4>Cantidad: {elemento.quantity}</h4>
            <Button sx={{  color: "#F2CEDB", border:"none", backgroundColor: "#0E2940" }} size="small" variant="contained" onClick={() => deleteById(elemento.id)}>Eliminar</Button>
          </div>
      </div>
        );
      })}

      {cart.length > 0 && (
        <>
          <Button sx={{  color: "#F2CEDB", border:"none", backgroundColor: "#0E2940" }} size="small" variant="contained" onClick={limpiar}>Limpiar carrito</Button>
          <Button sx={{  color: "#F2CEDB", border:"none", backgroundColor: "#0E2940" }} size="small" variant="contained">Terminar compra</Button>
        </>
      )}

      <h2>El total del carrito es : {total} </h2>
    </div>
  );
};

export default CartContainer;