import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";

import { Link } from "react-router-dom";
import Logo from ".././img/hero/logo.png";

function NavbarAdmin() {
  return (
    <Navbar className=" mx-auto max-w-full px-6 bg-[#4F5D73] border-[#4F5D73] py-3  sticky top-0 z-10   rounded-none  ">
      <div className="flex items-center justify-between  lg:px-20 text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5">
          <img src={Logo} alt="" />
        </Typography>
        <div>
          <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">
            <Typography
              as="li"
              variant="small"
              className="p-1 text-xl font-bold">
              <Link
                to="/"
                className="flex items-center hover:text-blue-500 transition-colors">
                Home
              </Link>
            </Typography>
          </ul>
        </div>
      </div>
    </Navbar>
  );
}
export default NavbarAdmin;
