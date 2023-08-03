import "./CartWidget.css"
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext)
    let total = getTotalQuantity()

    // Agregar ShowZero en el Badge para que muestre el cero
    return (
        <Link to="/cart" style={{color: "black"}}> 
            <Badge badgeContent={ total} color="secondary"> 
                <ShoppingCartIcon sx={{ color: "#F2CEDB" }}/>
            </Badge>
        </Link>
    );
};

export default CartWidget;
