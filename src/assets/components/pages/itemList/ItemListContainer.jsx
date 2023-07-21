import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { brandName } = useParams();

    useEffect(() => {
        let consulta;
        let productsCollection = collection(db, "products");

        if(!brandName){
            consulta = productsCollection
        }else{
            consulta = query( productsCollection, where( "brand", "==", brandName) )
        }

        getDocs(consulta).then((res) => {
        // console.log(res.docs);
        let arrayProductos = res.docs.map((product) => {
            return { ...product.data(), id: product.id };
        });
        setItems(arrayProductos)
        });
    }, [brandName]);

    return (
    <>
        <ItemList items={items} />
    </>
    );
};

export default ItemListContainer;