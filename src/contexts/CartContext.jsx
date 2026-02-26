import { createContext, useState } from "react";

export const CartContext = createContext()

export default function CartProvider({children}) {
    const [cart, setCart] = useState([])
    const [checkoutSuccess, setCheckoutSuccess] = useState(false)

    function updateCart(item, qty) {
        // cek jika di cart sudah ada produk tsb jangan ditambahkan tapi update qty nya aja
        let product = cart.find((data) => data.id == item.id)
        if (product) {
            setCart((prev) => {
                // loop nilai cart seblumnya untuk menjadi produk yg dimaksud
                return prev.map((data) => {
                    if (data.id == item.id) {
                        // update bagian qty dari data ditambahkan 1
                        return {...data, qty: data.qty + 1}
                    }
                }) 
            })
        } else {
            // jika produk yang akan dimasukan ke keranjang belum ada di state cart bikin baru
            let newProduct = {
                id: item.id,
                title: item.title,
                image: item.images[0],
                price: item.price,
                qty: qty
            }
            setCart([...cart, newProduct])
        }
    }

    function updateQtyProduct(id, type) {
        setCart((prev) => {
            return prev.map((item) => {
                // cari yang id itemnya sesuai yang mau diupdate
                if(item.id == id) {
                    if(type == "+") {
                        return {...item, qty: item.qty+1}
                    } else {
                        // jika pengurangan pastikn 1 gabisa dikurangi lagi
                        if (item.qty > 1) {
                            return {...item, qty: item.qty-1}
                        }
                    }
                }
                return item
            })
        })
    }

    function deleteProduct(id) {
        setCart((prev) => {
            // filter data cart.selain yang mau dihapus
            return prev.filter((item) => item.id != id)
        })
    }

    function deleteAll() {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, updateCart, updateQtyProduct, deleteProduct, deleteAll, checkoutSuccess, setCheckoutSuccess}}>
            {children}
        </CartContext.Provider>
    )
}