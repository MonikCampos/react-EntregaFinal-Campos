import { Route, Routes } from "react-router-dom";
import { routes } from "./menuRouters";
import Layout from "../assets/components/layout/Layout";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                {routes.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />))}
            </Route>
            <Route path="*" element={<h1>404 - Not found</h1>} />
        </Routes>
    );
};

export default AppRouter;