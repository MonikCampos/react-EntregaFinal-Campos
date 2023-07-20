
import "./Navbar.css"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import CartWidgetContainer from "../../common/cartWidget/CartWidgetContainer";

const Navbar = () => {
  return (
    <div>
      <div className="navContainer">
        <div className="containerBrand">
        <Link to="/"><img src="https://res.cloudinary.com/dawadzlfe/image/upload/v1688424143/CODER-React/Dermo/LogoDermo_alltnj.png" alt="DermoCosmetic" /></Link>
        </div>
          
        <div className="containerCategories">
          <Link to="/"><Button sx={{ color: "#F2CEDB" }}>Todos</Button></Link>
          <Link to="/brandName/Eucerin"><Button sx={{ color: "#F2CEDB" }}>Eucerin</Button></Link>
          <Link to="/brandName/ISDIN"><Button sx={{ color: "#F2CEDB" }}>ISDIN</Button></Link>
          <Link to="/brandName/La-Roche-Posay"><Button sx={{ color: "#F2CEDB" }}>La Roche-Posay</Button></Link>
        </div>
      <CartWidgetContainer />
      </div>
    </div>
  )
}

export default Navbar