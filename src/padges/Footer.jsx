import React from "react";
import ImgFooter1 from "../img/Footer/footer-logo.png";
import ImgFooter2 from "../img/Footer/payment.png";
import Imgclients1 from "../img/clients/client-1.png";
import Imgclients2 from "../img/clients/client-3.png";
import Imgclients3 from "../img/clients/client-4.png";
import Imgclients4 from "../img/clients/client-5.png";
import { Typography, Input } from "@material-tailwind/react";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="w-full">
      {" "}
      {/* footer */}
      <footer className="w-full  bg-black p-8">
        <div className="  flex items-start justify-around text-center ">
          <div className="grid gap-y-5 w-56  ">
            <img src={ImgFooter1} alt="logo-ct" />
            <p className="text-sm text-gray-500 text-left">
              The customer is at the heart of our unique business model, which
              includes design.
            </p>

            <img src={ImgFooter2} alt="" />
          </div>
          <div className="flex flex-col ">
            <h1 className="text-white text-lg ">SHOPPING</h1>
            <Link to="/" className="text-sm text-gray-500  text-left">
              Home
            </Link>
            <Link to="/shop" className="text-sm text-gray-500  text-left">
              Shop
            </Link>
            <Link to="/aboutUs" className="text-sm text-gray-500  text-left">
              About Us
            </Link>
          </div>

          <div className="flex flex-col text-left gap-y-4 w-40">
            <h1 className="text-white text-lg ">PARTNER</h1>
            <div className="grid gap-2 grid-cols-2 w-1/2">
              <img src={Imgclients1} alt="" />
              <img src={Imgclients2} alt="" />
              <img src={Imgclients3} className="w-full h-full" alt="" />
              <img src={Imgclients4} alt="" />
            </div>
          </div>

          <div className="flex flex-col text-left gap-y-4 w-56">
            <h1 className="text-white text-lg ">NEWLETTER</h1>
            <p className=" text-gray-500  text-left">
              Be the first to know about new arrivals, look books, sales &
              promos!{" "}
            </p>
            <div className=" relative">
              <Input
                variant="static"
                placeholder="Your email"
                className="text-white"
              />
              <MdOutlineEmail className="absolute top-1/2 right-1 text-gray-500" />
            </div>
          </div>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="gray" className="text-center font-normal">
          Copyright &copy; 2024 & 2025
        </Typography>
      </footer>
      {/* end footer */}
    </div>
  );
}

export default Footer;
