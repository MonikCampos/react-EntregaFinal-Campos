import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { products } from "../../../../productsMock";

import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { brandName } = useParams()

    useEffect(() => {
        let productosFiltrados = products.filter(elemento => elemento.brand === brandName)

        const tarea = new Promise((resolve, reject) => {
            resolve(brandName ? productosFiltrados : products);
            reject("Error")
        });

        tarea
            .then((respuesta) => setItems(respuesta))
            .catch((error) => console.log(error));
    }, [brandName]);

    return <ItemList items={items} />;
};

export default ItemListContainer;