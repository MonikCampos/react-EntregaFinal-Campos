import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../../productsMock";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let {id} = useParams()

  
  useEffect(()=>{

    let promesa = new Promise( (resolve, reject)=>{
      let productSelected = products.find((product)=> product.id === +id)
      resolve(productSelected)
      reject()
    })

    promesa.then((res)=> setProduct(res) ).catch(err=>console.log(err))

  }, [id])
 

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    console.log(data);
  };

  return <ItemDetail product={product} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetailContainer;