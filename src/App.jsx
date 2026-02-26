import NavbarComp from "./components/NavbarComp"
import BannerComp from "./components/BannerComp"
import { useEffect, useState, useContext } from "react"
import CardComp from "./components/CardComp"
import CardList from "./components/CardList"
import { Button } from "flowbite-react"
import { Link } from "react-router-dom"
import { Spinner } from "flowbite-react"
import { CartContext } from "./contexts/CartContext"
import ModalSuccessComp from "./components/ModalSuccessComp"

export default function App() {
  const [categoryProducts, setCategoryProducts] = useState([])

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true);

  const { checkoutSuccess, setCheckoutSuccess} = useContext(CartContext)

  async function getDataCategories() {
    const url = "https://api.escuelajs.co/api/v1/categories";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      // isi state categoryproducts dengan data dari api result
      setCategoryProducts(result.slice(0, 4)); // ambil 4 data pertama saja
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getDataProducts() {
    const url = "https://api.escuelajs.co/api/v1/products";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      // isi state categoryproducts dengan data dari api result
      setProducts(result.slice(0, 4)); // ambil 4 data pertama saja
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  // menjalankan getdata api pas baru dibuka

  useEffect(() => {
    getDataCategories();
    getDataProducts();
  }, []);

  // jik loading true return pake ini
  if (loading == true) {
    return (
      <div className="block mx-auto mt-50 w-100">
        <Spinner /> sedang memuat data...
      </div>
    )
  }

  // jika loading false return ini
  return (
    <>
      <div className="mx-15 my-5">
        <BannerComp />
        <CardList data={categoryProducts} type={"category"} />
        <CardList data={products} type={"product"}>
          <div className="flex justify-between mt-15">
            <h1 className="text-2xl font-bold">Daftar Produk Populer</h1>
            <Link to="/products">
              <Button className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800">
                Selengkapnya
              </Button>
            </Link>
          </div>
        </CardList>
      </div>

      <ModalSuccessComp
    openModal={checkoutSuccess}
    handleCloseModal={() => setCheckoutSuccess(false)}
    />
    </>
  )
}