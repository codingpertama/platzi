import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import Template from "../Template";
import Profile from "../pages/Profile";
import CategoryProducts from "../pages/CategoryProducts";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import { auth } from "../middleware/auth";
import { authLogin } from "../middleware/auth";
import Checkout from "../pages/Checkout"

// variabel yang menyimpan daftar routing di export biar bisa dipake di fike lain
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template/>,
        // mengisi ke outlet di template.jsx
        children: [
            {
                path: "/", //url path
                element: <App/>, //file yang akan di tampilkan
            },
            {
                path: "/products",
                element: <Products/>,
            },
            {
                path: "/profile",
                element: <Profile/>
            },
            {
                // path dinamis (:)
                path: "/products/category/:categoryId",
                element: <CategoryProducts/>
            },
            
        ]
    },
    {
        path: "/",
        element: <Template/>,
        // memanggul middleware sebelum menjalankan path didalam sini
        loader: auth,
        children: [
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/checkout",
                element: <Checkout/>
            }
        ]
    },
    {
    path: "/",
    element: <Template />,
    loader: authLogin,
    children: [
        {
            path: "/login",
            element: <Login />
        }
    ]
    }
])