import {
    Avatar,
    Button,
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
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function NavbarComp() {
    const {isLogin, logout} = useContext(AuthContext)
    const navigate = useNavigate()

    // handler event click button logout
    function handleClickLogout() {
        logout();
        navigate("/login")
    }
    return (
        <Navbar fluid rounded>
            <NavbarBrand href="/">
                <img src={imgLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Platzi Fake Store</span>
            </NavbarBrand>
            <div className="flex md:order-2">
                <Link to="/cart">
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
                {
                    isLogin != null && (
                        <Button color="red" className="ms-2" onClick={handleClickLogout}>Logout</Button>
                    )
                }
                <NavbarToggle />
            </div>
        </Navbar>
    );
}