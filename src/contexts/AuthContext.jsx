import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [isLogin, setIsLogin] = useState(localStorage.getItem("access_token"));

    function checkLogin() {
        if (localStorage.getItem("access_token")) {
            setIsLogin(localStorage.getItem("access_token"));
        }
    }

    function logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setIsLogin(null);
    }
    
    return (
        <AuthContext.Provider value={{ isLogin, checkLogin, logout }}>
            {children}
        </AuthContext.Provider>
    )
}