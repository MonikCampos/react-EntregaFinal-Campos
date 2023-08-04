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

        if (!brandName) {
            consulta = productsCollection
        } else {
            consulta = query(productsCollection, where("brand", "==", brandName))
        }

        getDocs(consulta).then((res) => {
            // console.log(res.docs);
            let arrayProductos = res.docs.map((product) => {
                return { ...product.data(), id: product.id };
            });
            setItems(arrayProductos)
        });
    }, [brandName]);

    // if(items.length === 0) {
    //     return <h1>Cargando...</h1>;
    // } if con return temprano

    //rendering ternario
    // return (
    // <>
    //     <h2>DermoCosmetic: Productos</h2>
    //     {
    //         items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items} />  
    //     }
    // </>
    // );

    return (
        <>
            <h2 style={{ backgroundColor: "#7E778C"}}>DermoCosmetic: Productos</h2>
            {
                <ItemList items={items} />
            }
        </>
    );
};

export default ItemListContainer;