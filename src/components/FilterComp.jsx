import { Label, TextInput } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";
import { Dropdown, DropdownItem } from "flowbite-react";

export default function FilterComp({ updateSearchValue, sortProduct }) {
    return (
        <div className="flex mx-10">
            <div className="w-4xl">
                <TextInput id="email4" type="email" icon={IoIosSearch} placeholder="cari berdasarkan nama produk"  onKeyUp={(e) => updateSearchValue(e.target.value)} />
            </div>
            <Dropdown label="Urutkan Data" color="alternative" className="ms-3 w-sm" dismissOnClick={false}>
                <DropdownItem onClick={() => sortProduct("Harga Termurah")}>Harga Termurah</DropdownItem>
                <DropdownItem onClick={() => sortProduct("Harga Termahal")}>Harga Termahal</DropdownItem>
                <DropdownItem onClick={() => sortProduct("alfabet a-z")}>Alfabet A-Z</DropdownItem>
                <DropdownItem onClick={() => sortProduct("alfabet z-a")}>Alfabet Z-A</DropdownItem>
            </Dropdown>
        </div>
    )
}