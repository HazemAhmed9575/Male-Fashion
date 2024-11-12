import React, { useContext, useState } from "react";
import Store from "../context/store";
function CheckOut() {
  // ___________________________________________________________________
  const { cartUser, logginUser } = useContext(Store);
  const [totalPrice, setTotalPrice] = useState(
    cartUser
      .map((data) => data.price * data.preparation)
      .reduce((Value1, Value2) => Value1 + Value2)
  );
  const [taxes, setTaxes] = useState(totalPrice * 0.02);
  const [totalAmount, setTotalAmount] = useState(taxes + totalPrice);
  // ___________________________________________________________________

  return (
    <div className="flex flex-col">
      {/* text Checkout */}
      <div className="w-full text-center p-4">
        <h1 className="text-4xl  ">Checkout</h1>
      </div>
      {/* end text Checkout */}
      {/*  */}
      <div className="flex items-center justify-around p-6">
        {/* left padge */}
        <div className="w-1/2 flex flex-col gap-4">
          <div className="flex flex-col gap-y-3">
            <h1 className="text-[#018081]">Email</h1>
            <input
              className="border-2 rounded-md w-2/3 pointer-events-none bg-[#D7DCDF]  p-1 "
              placeholder={logginUser.email}
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <h1 className="text-[#018081]">Card Number</h1>
            <input
              type="text"
              className="border-2 rounded-md w-2/3 p-1 border-gray-400"
              placeholder="**** **** **** ***"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <h1 className="text-[#018081]">Expiry Data</h1>
            <input
              className="border-2 rounded-md w-2/3 p-1  border-gray-400"
              placeholder="****"
              type="text"
            />
          </div>
          <div>
            <button className=" bg-[#424D60] text-white p-1 w-40 rounded-md">
              Proceed To Pay
            </button>
          </div>
        </div>
        {/* end left padge */}
        {/* right padge*/}
        <div className="bg-[#018081] rounded-lg text-white gap-y-6  flex-col flex p-4">
          <div className="flex justify-between">
            <p>Total Price</p>
            <h1>${totalPrice.toFixed(2)}</h1>
          </div>
          <div className="flex justify-between">
            <p>Taxes</p>
            <h1>{taxes.toFixed(2)}</h1>
          </div>
          <div className="flex justify-between">
            <p>Promo Code</p>
            <input
              type="text"
              className="rounded-full w-1/2 text-black text-center"
            />
          </div>
          <div className="flex justify-between">
            <p>Total Amount</p>
            <h1>{totalAmount.toFixed(2)}</h1>
          </div>
        </div>
        {/* end right padge*/}
      </div>
    </div>
  );
}

export default CheckOut;
