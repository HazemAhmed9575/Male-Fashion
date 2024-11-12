// _______________________________________
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import ImgBanner1 from "../img/banner/banner-1.jpg";
import ImgBanner2 from "../img/banner/banner-2.jpg";
import ImgBanner3 from "../img/banner/banner-3.jpg";
import ImgLastScshan1 from "../img/last-section/1.jpg";
import ImgLastScshan2 from "../img/last-section/2.jpg";
import ImgLastScshan3 from "../img/last-section/3.jpg";
import ImgLastScshan4 from "../img/last-section/4.jpg";
import { Rating } from "@material-tailwind/react";
import { Link } from "react-router-dom";
// _______________________________________
function Home() {
  return (
    <div className="w-full    ">
      <div className="w-full h-screen bg-footer-texture bg-right md:bg-center bg-cover flex items-center justify-end md:justify-start lg:p-20 md:p-10 ">
     
        <div className=" h-1/2 flex-col flex lg:justify-evenly sm:justify-center ">
          <p className="text-sm lg:text-sm sm:text-xs text-[#E55352] font-bold">SUMMER COLLECTION</p>
          <div className="lg:text-4xl text-2xl text-[#2F455E]">
            <h1>Fall - Wintrt </h1>
            <h1>Collactions 2025</h1>
          </div>
          <div className="w-1/2 lg:w-auto">

          <p className=" lg:text-sm text-xs text-gray-500">
            A specialist label creating luxury essentials, Ethically crafted
            with
          </p>
          <p className=" lg:text-sm sm:text-xs text-gray-500">
            an unwavering commitment to exceptional quality.
          </p>
          </div>
          <button className="bg-[#E55352] flex justify-center items-center text-white w-52 h-10 gap-1">
            SHOP NOW <FaLongArrowAltRight />
          </button>
        </div>
      </div>

      {/* bord2 */}
      <div className="w-full py-20 flex justify-evenly  ">
        {/* ImgBanner2 */}
        <div className=" flex flex-col justify-end  ">
          <img src={ImgBanner2} />
          <div className="lg:text-4xl sm:text-2xl text-[#2F455E]">
            <h1>Accessories</h1>
            <Link to="/shop" className="text-base underline  ">
              SHOP NOW
            </Link>
          </div>
        </div>
        {/* end ImgBanner2 */}
        <div className="flex flex-col items-center gap-16">
          {/* ImgBanner1 */}
          <div className="relative">
            <img src={ImgBanner1} />
            <div className="absolute top-28 sm:top-16  lg:right-[62%] tablet:right-[62%] sm:right-1/2 lg:text-4xl md:text-3xl sm:text-2xl tracking-widest w-full text-[#2F455E]">
              <h1>Clothing</h1>
              <h1>Collctions 2025</h1>
              <Link
                to="/shop"
                className="text-base underline tracking-[.25em] ">
                SHOP NOW
              </Link>
            </div>
          </div>
          {/* end ImgBanner1 */}
          {/* ImgBanner3 */}
          <div className="relative">
            <img src={ImgBanner3} />
            <div className="absolute lg:top-28 sm:right-0 sm:top-10 lg:right-1/3 lg:text-4xl sm:text-2xl tracking-widest w-full text-[#2F455E]">
              <h1>Shoes Spring </h1> <h1>2025</h1>
              <Link
                to="/shop"
                className="text-base underline tracking-[.25em] ">
                SHOP NOW
              </Link>
            </div>
          </div>
          {/* end ImgBanner3 */}
        </div>
      </div>
      {/* end bord2 */}
      {/* span */}
      <div className="bg-hero-pattern w-full bg-fixed  ">
        <div className="w-full bg-gray-900/50 p-2 scroll-auto ">
          <h1 className="lg:text-4xl sm:text-2xl text-white text-center">
            Free shipping, 30-day return or refund guarantee.{" "}
          </h1>
        </div>
      </div>
      {/* span */}
      {/* last skchan */}
      <div className=" grid gap-6 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 p-20">
        
        <div className="flex flex-col gap-y-7">
        <img src={ImgLastScshan1} className="rounded-md" />
          <Rating value={4} />
          <p>$200</p>
        </div>
        <div className="flex flex-col gap-y-7">
        <img src={ImgLastScshan2} className="rounded-md" />
          <Rating value={4} />
          <p>$150</p>
        </div>
        <div className="flex flex-col gap-y-7">
        <img src={ImgLastScshan3} className="rounded-md" />
          <Rating value={4} />
          <p>$600</p>
        </div>
        <div className="flex flex-col gap-y-7">
        <img src={ImgLastScshan4} className="rounded-md" />
          <Rating value={4} />
          <p>$300</p>
        </div>
      </div>
      {/* end last skchan */}
    </div>
  );
}

export default Home;
