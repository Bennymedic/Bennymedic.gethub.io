import { Navigate } from "react-router-dom";
import AddProduct from "../pages/product/add-product.page";
import ProductList from "../pages/product/product-list.pages";
import PageNotFound from "../pages/product/PageNotFound";

export default [
  {
    path: "/products",
    element: <ProductList />,
  },
  {
    path: "/add",
    element: <AddProduct />,
  },
  {
    path: '/',
    element: <Navigate to='/products' />
},
{
    path: '*',
    element: <PageNotFound />
}
];
