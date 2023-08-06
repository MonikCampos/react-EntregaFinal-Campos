import "./ItemList.css"
import ProductCard from "../../common/productCard/ProductCard";
import { Skeleton, Stack } from "@mui/material";

const ItemList = ({ items }) => {
    let arr = [1, 2, 3, 4];
    return (
        <>
        <section
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                paddingTop: "50px",
                gap: "20px",
                backgroundColor: "#f2cedb"
            }}
        >
            {items.length > 0
        ? items.map((item) => <ProductCard key={item.id} item={item} />)
        : arr.map((elemento) => (
            <Stack spacing={2} key={elemento}>
                <Skeleton variant="text" animation="wave" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="circular" animation="wave" width={60} height={40} />
                <Skeleton variant="rectangular" animation="wave" width={310} height={250} />
                <Skeleton variant="rounded" animation="wave" width={310} height={150} sx={{ borderBottomtom: "10px" }}/>
            </Stack>
            ))}
        </section>
        </>
    );
};

export default ItemList;