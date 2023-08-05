import { Button, IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";

const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  return (
    <div>
      <div style={{ display: "flex", alignItems:"center" }}>
        <Button
          disabled={counter <= 1}
          sx={{ height:"30px", color: "#F2CEDB", border:"none", backgroundColor: "#0E2940" }}
          size="small"
          variant="contained"
          onClick={() => setCounter(counter - 1)}
        >
          <h3>-</h3>
        </Button>
        <h4>{counter}</h4>
        <Button
          sx={{ height:"30px", color: "#F2CEDB", border:"none", backgroundColor: "#0E2940" }}
          size="small"
          variant="contained"
          disabled={counter >= stock}
          onClick={() => setCounter(counter + 1)}
        >
          <h3>+</h3>
        </Button>
        <IconButton sx={{ color: "#0E2940" }} aria-label="Agregar al carrito" onClick={() => agregarAlCarrito(counter)}>
          <Link to={"/cart"}>
            <AddShoppingCartIcon />
          </Link>
        </IconButton>
      </div>
    </div>
  );
};

export default Counter;