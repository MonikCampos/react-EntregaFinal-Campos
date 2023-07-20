import "./CartWidget.css"
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <Link to="/cart" style={{color: "black"}}>
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon sx={{ color: "#F2CEDB" }}/>
            </Badge>
        </Link>
    );
};

export default CartWidget;
