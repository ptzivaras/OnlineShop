import { createBrowserRouter } from "react-router-dom";
import Shop from "./Shop.jsx";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper.jsx";
import ProductListPage from "./pages/ProductListPage/ProductListPage.jsx";

import ProductDetails from "./pages/ProductDetailPage/ProductDetails.jsx";
import { loadProductBySlug } from "./routes/products";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <ShopApplicationWrapper />,
      children:[
        {
            path:"/",
            element:<Shop />
        },
        {
            path:"/women",
            element:<ProductListPage categoryType={'WOMEN'}/>,
        },
        {
          path:"/men",
          element:<ProductListPage categoryType={'MEN'}/>,
       },
        {
          path:"/product/:slug",
          loader: loadProductBySlug,
          element: <ProductDetails />
        }
      ]
    }
  ]);