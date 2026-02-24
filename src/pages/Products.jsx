import { useEffect, useState } from "react"
import CardList from "../components/CardList"
import { Spinner } from "flowbite-react";
import FilterComp from "../components/FilterComp";
import PaginationComp from "../components/PaginationComp";

export default function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => {
        setCurrentPage(page);
        // refresh data di pagination
        getDataProducts("https://api.escuelajs.co/api/v1/products/?limit=4" + "&offset=" + currentPage)
    };

    function updateSearchValue(value) {
        // simpan value dari props updateSearchValue dari filtercomp.jsx ke state
        setSearch(value);
        getDataProducts("https://api.escuelajs.co/api/v1/products/?title=" + search + "&limit=4" + "&offset=" + currentPage);
    }

    function sortProduct(type) {
        // copy data dari state untuk diproses pengurutan fungsi js
        const newProducts = [...products];
        if (type == "Harga Termurah") { 
            // fungsi js untuk mengurutkan nilai number : .sort(-)
            newProducts.sort((a,b) => a.price - b.price);
        } else if(type == "Harga Termahal") {
            newProducts.sort((a,b) => b.price - a.price)
        } else if(type == "alfabet a-z") {
            newProducts.sort((a,b) => a.title.localeCompare(b.title))
        } else if(type == "alfabet z-a") {
            newProducts.sort((a,b) => b.title.localeCompare(a.title))
        }
        // simpan hasil pengurutan ke state
        setProducts(newProducts)
    }

    async function getDataProducts(url= "https://api.escuelajs.co/api/v1/products/?title=" + search + "&limit=4" + "&offset=" + currentPage) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    // isi state categoryproducts dengan data dari api result
    setProducts(result);
    setLoading(false);
  } catch (error) {
    console.error(error.message);
  }
}

    useEffect(() => {
        getDataProducts();
    }, []);

    if (loading == true) {
        return (
          <div className="block mx-auto mt-50 w-100">
            <Spinner/> sedang memuat data...
          </div>
        )
      }

    return (
        <>
        <h1 className="font-bold text-2xl m-15">Daftar lengkap Produk</h1>
        <FilterComp updateSearchValue={updateSearchValue} sortProduct={sortProduct}/>
        <CardList data={products} type={"product"}></CardList>
        <PaginationComp currentPage={currentPage} onPageChange={onPageChange} />
        </>
    )
}