import CounterContainer from "../../common/Counter/CounterContainer"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ItemDetail.css"
import { Link } from "react-router-dom";

const ItemDetail = ( { product, agregarAlCarrito } ) => {
  return (
    <div className="cardDetail">
      <Card sx={{ width: 500, backgroundColor: "#BFA4B3" }}>
        <CardMedia sx={{ height: 440 }} image={product.img} title={product.title} />
        <CardContent sx={{  backgroundColor: "#BFA4B3" }}>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {product.brand}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            {product.description}                    
          </Typography>
        </CardContent>
        <CardActions sx={{  backgroundColor: "#BFA4B3" }}>
          <CounterContainer stock={product.stock} agregarAlCarrito={agregarAlCarrito } />
          <Link to="/"><Button sx={{  color: "#F2CEDB", border:"none", backgroundColor: "#0E2940" }} size="small" variant="contained">Volver</Button></Link>   
        </CardActions>
      </Card>
    </div>
  )
}

export default ItemDetail