import ItemListContainer from "../assets/components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "../assets/components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "../assets/components/pages/cart/CartContainer";
import CheckoutContainer from "../assets/components/pages/checkout/CheckoutContainer";
import FormFormik from "../assets/components/pages/formFormik/FormFormik";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer,
    },
    {
        id: "category",
        path: "/brandName/:brandName",
        Element: ItemListContainer,
    },
    {
        id: "detail",
        path: "/itemDetail/:id",
        Element: ItemDetailContainer,
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer,
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer,
    },
    {
        id: "formik",
        path: "/formik",
        Element: FormFormik
    }
];