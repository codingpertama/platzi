import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";
import CardList from "../components/CardList";
import FilterComp from "../components/FilterComp";
import PaginationComp from "../components/PaginationComp";

export default function CategoryProducts() {
    // mengambil path dinamis menggunakan useparams
    const { categoryId } = useParams();
    const [category, setCategory] = useState({});
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => {
        setCurrentPage(page);
        // refresh data di pagination
        getCategoryProducts("https://api.escuelajs.co/api/v1/products/?categoryId=" + categoryId + "&limit=4" + "&offset=" + currentPage)
    };

    function updateSearchValue(value) {
        // simpan value dari props updateSearchValue dari filtercomp.jsx ke state
        setSearch(value);
        getCategoryProducts("https://api.escuelajs.co/api/v1/products/?categoryId=" + categoryId + "&title=" + search);
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

    async function getCategory() {
        const url = "https://api.escuelajs.co/api/v1/categories/" + categoryId;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            // isi state categoryproducts dengan data dari api result
            setCategory(result);
            setLoading(false);
        } catch (error) {
            console.error(error.message);
        }
    }

    async function getCategoryProducts(url = "https://api.escuelajs.co/api/v1/products/?categoryId=" + categoryId + "&limit=4" + "&offset=" + currentPage) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            // isi state categoryproducts dengan data dari api result
            setProducts(result);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getCategory();
        getCategoryProducts();
    }, []);

    // jik loading true return pake ini
    if (loading == true) {
        return (
            <div className="block mx-auto mt-50 w-100">
                <Spinner /> sedang memuat data...
            </div>
        )
    }
    return (
        <>
            <h1 className="text-3xl font-bold my-15">Produk Kategori {category.name}</h1>
            <FilterComp updateSearchValue={updateSearchValue} sortProduct={sortProduct}/>
            <CardList data={products} type={"products"} />
            <PaginationComp currentPage={currentPage} onPageChange={onPageChange} />
        </>
    )
}