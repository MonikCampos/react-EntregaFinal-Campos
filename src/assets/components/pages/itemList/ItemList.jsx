import "./ItemList.css"
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
    return (
        <section
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                paddingTop: "50px",
                gap: "20px"
            }}
        >
            {items.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))}
        </section>
    );
};

export default ItemList;