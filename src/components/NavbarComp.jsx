import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import imgLogo from "../assets/store2.png";
import { FcPaid } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function NavbarComp() {
    return (
        <Navbar fluid rounded>
            <NavbarBrand href="/">
                <img src={imgLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Platzi Fake Store</span>
            </NavbarBrand>
            <div className="flex md:order-2">
                <Link to="/login">
                <FcPaid className="me-2 text-4xl mt-1"/>
                </Link>
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <DropdownHeader>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </DropdownHeader>
                    <Link to="/profile">
                    <DropdownItem>Dashboard</DropdownItem>
                    </Link>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Earnings</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>Sign out</DropdownItem>
                </Dropdown>
                <NavbarToggle />
            </div>
        </Navbar>
    );
}