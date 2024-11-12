import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { FiLogIn } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Logo from "../img/hero/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Store from "../context/store";
// ===================================================================================
function ProfileMenu() {
  const naveget = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const { logged, logginUser, setLogged, setLogginUser } = useContext(Store);

  return logged ? (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={logginUser?.image}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {logginUser?.role == "admin" && (
          <MenuItem
            onClick={() => naveget("/admin")}
            className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}>
            <Typography as="span" variant="small" className="font-normal">
              Control
            </Typography>
          </MenuItem>
        )}

        <MenuItem
          onClick={() => {
            naveget("/profilepicture");
          }}
          className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}>
          <Typography as="span" variant="small" className="font-normal">
            Profile
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={() => {
            localStorage.setItem("id", 0),
              setLogged(false),
              setLogginUser(null),
              naveget("/login");
          }}
          className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}>
          <Typography as="span" variant="small" className="font-normal">
            Log-Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  ) : (
    <Link to="/login">
      <FiLogIn className="text-[#2515ff] text-3xl " />
    </Link>
  );
}

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium  ">
        <Link to="/" className="flex items-center transition-colors">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium">
        <Link to="/shop" className="flex items-center transition-colors">
          Shop
        </Link>
      </Typography>
    </ul>
  );
}

function NavbarSimple() {
  const { numperCart } = useContext(Store);
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-full px-6 bg-gray-300 py-3  sticky top-0 z-10  rounded-none  ">
      <div className=" flex justify-around items-center  text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5">
          <img src={Logo} alt="" />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>

        <div className="flex">
          <Typography
            as="button"
            variant="small"
            color="blue-gray"
            className="p-1  relative ">
            <div
              className={`absolute  end-0 top-0 text-white rounded-full w-4 h-5 text-center ${
                numperCart > 0 ? "bg-green-700" : "bg-red-500"
              }`}>
              <p>{numperCart}</p>
            </div>
            <Link to="/cart">
              {" "}
              <HiOutlineShoppingBag className="text-3xl " />
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium">
            <ProfileMenu />
          </Typography>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
export default NavbarSimple;
