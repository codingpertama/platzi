import { redirect } from "react-router-dom";

export function auth() {
    const access_token = localStorage.getItem("access_token");

    // cek jika di local storage ada access_token maka halaman gaboleh akses
    if(!access_token) {
        // perpindahan halaman
        // 1. navigate : jika func dipanggil lewat event(onchange dkk)
        // 2. redirect: jika func biasa bukan dari on
        return redirect("/login");
    }
    // kalau gak ada local storage bole akses
    return null;
}

export function authLogin() {
    const access_token = localStorage.getItem("access_token");

    if (access_token) {
        return redirect("/");
    }

    return null;
}