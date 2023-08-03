import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { db } from "../../../../firebaseConfig";
import {getDoc, collection, doc} from "firebase/firestore"
import { CartContext } from "../../../../context/CartContext";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let cantidadEnCarrito = getQuantityById(id);

  useEffect(() => {
    let refCollection = collection( db , "products" )
    let refDoc = doc( refCollection, id )
    getDoc(refDoc).then( res => setProduct({...res.data(), id: res.id}))

  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

  addToCart(data);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500
    })
  };

  return (
    <>
      <ItemDetail
        product={product}
        agregarAlCarrito={agregarAlCarrito}
        cantidadEnCarrito={cantidadEnCarrito}
      />
    </>
  );
};

export default ItemDetailContainer;