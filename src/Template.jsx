import { Outlet } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import AuthProvider from "./contexts/AuthContext";

export default function Template() {
    return (
        <>
        <AuthProvider>
            <NavbarComp/>
            {/* menyediakan tempat dinamis yang akan berubah mirip yield */}
            <Outlet/>
        </AuthProvider>
        </>
    )
}