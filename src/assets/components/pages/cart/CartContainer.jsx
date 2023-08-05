import { useContext } from "react"
import { CartContext } from "../../../../context/CartContext"
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let limpiar = () => {
    Swal.fire({
      title: '¿Estás seguro que quieres eliminar todo?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Sí, eliminar todo',
      confirmButtonColor: "green",
      denyButtonText: `No eliminar`,
      denyButtonColor: "#0E2940"
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Se eliminaron los productos del carrito', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('El carrito queda como estaba', '', 'info')
      }
    })
  }

  let total = getTotalPrice();
  return (
    <div style={{ backgroundColor: cart.length > 0 ? "white" : "#F2CEDB" }}>
      <h2 style={{ backgroundColor: "#7E778C"}}>Carrito de Compras</h2>

      {cart.map((elemento) => {
        return (
          <div className="media p-3" key={elemento.id} style={{ width: "1500px", border: "2px solid #BFA4B3" }}>
            <img src={elemento.img} alt={elemento.title} className="mr-3 mt-3" />
            <div className="media-body">
              <h5>{elemento.title}</h5>
              <h4>Precio: ${elemento.price}</h4>
              <h4>Cantidad: {elemento.quantity}</h4>
              <Button sx={{ color: "#F2CEDB", border: "none", backgroundColor: "#0E2940" }} size="small" variant="contained" onClick={() => deleteById(elemento.id)}>Eliminar</Button>
            </div>
          </div>
        );
      })}

      {/* rendering con && */}
      {cart.length > 0 && (
        <>
          <br />
          <Button sx={{ color: "#F2CEDB", border: "none", backgroundColor: "#0E2940" }} size="small" variant="contained" onClick={limpiar}>Limpiar carrito</Button>
          <Link to="/checkout">
            <Button sx={{ color: "#F2CEDB", border: "none", backgroundColor: "#0E2940" }} size="small" variant="contained">Terminar compra</Button>  
          </Link>
          <Link to="/"><Button sx={{  color: "#F2CEDB", border:"none", backgroundColor: "#0E2940" }} size="small" variant="contained">Volver a Productos</Button></Link>
          <h2></h2>
        </>
      )}
      {cart.length === 0 ? 
        <>
          <h4 style={{ backgroundColor: "#F2CEDB"}}>El carrito está vacío</h4>
          <Link to="/"><Button sx={{  color: "#F2CEDB", border:"none", backgroundColor: "#0E2940" }} size="small" variant="contained">Volver a Productos</Button></Link>
          <h2></h2>
        </> : <h4 style={{ backgroundColor: "#7E778C"}}>El total del carrito es : {total} </h4>}
    </div>
  );
};

export default CartContainer;