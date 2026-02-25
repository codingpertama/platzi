import { Outlet } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import AuthProvider from "./contexts/AuthContext";
import CartProvider from "./contexts/CartContext";

export default function Template() {
    return (
        <>
        <AuthProvider>
            <CartProvider>
            <NavbarComp/>
            {/* menyediakan tempat dinamis yang akan berubah mirip yield */}
            <Outlet/>
            </CartProvider>
        </AuthProvider>
        </>
    )
}