// _______________________________________________________
import React, { useContext } from "react";
import ImgCart from "../img/Cart/empty-shopping.jpg";
import { Button } from "@material-tailwind/react";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineCreditCard } from "react-icons/md";
import Store from "../context/store";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// _______________________________________________________
function Cart() {
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++
  const { setCartUser, cartUser, setNumperCart, numperCart, logged } = useContext(Store);
  const naveget = useNavigate();
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++
  // =====================================================
  // function 
  // ____________________________________________________
  const decrese = (id) => {
    let newData = cartUser.map((data) => {
      if (data.id == id && data.preparation > 1) {
        data.preparation--;
      }
      return data;
    });
    setCartUser(newData);
  };
// ____________________________________________________
  const increse = (id) => {
    let newData = cartUser.map((data) => {
      if (data.id == id) {
        data.preparation++;
      }
      return data;
    });
    setCartUser(newData);
  };
// ____________________________________________________
  const del = (id) => {
    let newData = cartUser.filter((data) => {
      return data.id != id;
    });
    setCartUser(newData);
    setNumperCart(numperCart - 1);
  };
// ____________________________________________________
  const checkOut = () => {
    if (logged) {
 naveget("/checkOut")
    } else {
      Swal.fire({
        title: "You must log in first.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go log in",
      }).then((result) => {
        if (result.isConfirmed) {
          naveget("/login");
        }
      });
    }
  };
  // ____________________________________________________
  // end function
   // =====================================================
  return (
    <div className=" w-full flex justify-around ">
      {cartUser.length > 0 ? (
        <div className="w-1/2 flex flex-col gap-y-5 items-center p-4  ">
          {cartUser.map(({ id, price, title, image, preparation }, indx) => (
            <div
              key={indx}
              className=" w-full h-40 flex flex-col border-b-4 border-gray-300">
              <div className=" flex justify-around h-2/3  w-full  ">
                <div className=" ">
                  <img src={image} className="w-full h-full" />
                </div>
                <div className="flex justify-center items-center">
                  <p className=" text-sm text-gray-500">{title.slice(0, 20)}</p>
                </div>
                <div className="flex justify-center items-center">
                  <p className=" text-sm text-gray-500">${price}</p>
                </div>
              </div>
              <div className="flex justify-around p-4">
                <Button onClick={() => decrese(id)} size="sm" className={`${preparation == 1 ? "pointer-events-none bg-[#9DA5B1]":"bg-red-600 pointer-events-auto "}`} >
                  Decrese
                </Button>
                <h1>{preparation}</h1>
                <Button size="sm" onClick={() => increse(id)} color="green">
                  increse
                </Button>
                <h1>${price * preparation}</h1>
                <button className="text-xl" onClick={() => del(id)}>
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-1/2 flex flex-col items-center ">
          <div className="h-3/4">
            <img src={ImgCart} className="w-full h-full" />
          </div>
          <div>
            <Button
              onClick={() => naveget("/shop")}
              color="green"
              className="flex gap-1">
              SHOP NOW <BsCart4 />
            </Button>
          </div>
        </div>
      )}

      <div className="flex flex-col justify-between py-12 w-72 ">
        <div className="bg-[#F4F2EE] sticky top-20 z-10   rounded-none   p-6 gap-4">
          <h1 className="text-xl">CART TOTAL</h1>

          <div className="flex justify-between items-center text-3xl">
            <h1>
              ${" "}
              {cartUser.length == 0
                ? 0
                : cartUser
                    .map((data) => data.price * data.preparation)
                    .reduce((Value1, Value2) => Value1 + Value2)
                    .toFixed(2)}
            </h1>
            <MdOutlineCreditCard />
          </div>
          <div className="text-center ">
            <button
              onClick={() => checkOut()}
              className={`bg-[#9DA5B1] text-white p-3 w-full text-xl pointer-events-none ${
                cartUser.length > 0 && "pointer-events-auto"
              }`}>
              CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
