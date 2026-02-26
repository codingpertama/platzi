import { Button, ButtonGroup, Card } from "flowbite-react";
import { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
    const { cart, deleteAll, setCheckoutSuccess } = useContext(CartContext)
    const navigate = useNavigate();

    function handleCheckout() {
        deleteAll(); // kosongkan cart
        setCheckoutSuccess(true)
        navigate("/")
    }

    useEffect(() => {
        if(cart.length == 0) {
            navigate("/")
        }
    })

    const totalProduct = cart.reduce((total, item) =>
        total + (item.price * item.qty), 0
    )
    const appFee = totalProduct * 0.11
    const totalPay = totalProduct + appFee
    return (
        <Card className="w-4xl block mx-auto my-15">
            <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Checkout</h5>
            </div>
            <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {
                        cart.map((item, index) => (
                            <li className="py-3 sm:py-4" key={index}>
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <img
                                            alt="Neil image"
                                            height="50"
                                            src={item.image}
                                            width="50"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400"><b>x{item.qty}</b></p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${item.price}</div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white my-5">Detail Pembayaran</h5>
                <div className="flex items-center space-x-4">
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-md text-gray-500 dark:text-gray-400">Total Harga Produk</p>
                    </div>
                    <div className="inline-flex items-center text-base font-bold text-gray-500 dark:text-white">$ {totalProduct}</div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-md text-gray-500 dark:text-gray-400">Biaya Aplikasi</p>
                    </div>
                    <div className="inline-flex items-center text-base font-bold text-gray-500 dark:text-white">$ {appFee}</div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-md text-gray-500 dark:text-gray-400">Total Harga Bayar</p>
                    </div>
                    <div className="inline-flex items-center text-base font-bold text-gray-500 dark:text-white">$ {totalPay}</div>
                </div>
                <div className="flex justify-end">
                    <Button className="mt-8" onClick={handleCheckout}>Selesaikan Pembayaran</Button>
                </div>
            </div>
        </Card>
    )
}