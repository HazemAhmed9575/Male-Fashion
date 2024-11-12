import React, { useContext, useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Store from "../../context/store";
// ______________________________________________________________
function HomeAdmin() {
  const naveget = useNavigate();
  const [allusers, setAllUsers] = useState([]);

  const { prodct } = useContext(Store);
  // ______________________________________________________________

  useEffect(() => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_API_ROUTE}/users`,
    }).then((res) => {
      setAllUsers(res.data);
    });
  }, []);
  // ______________________________________________________________

  return (
    <div className=" w-full grid grid-cols-1 md:grid-cols-2  items-center p-3 gap-5">
      <div className="bg-[#1F1F31] rounded flex flex-col text-white text-xl md:text-2xl font-normal  p-6 items-center gap-y-10">
        <h1 className="text-blue-500  text-3xl ">Users</h1>

        <h1>
          Number of Users :{" "}
          <span className="text-green-700 font-semibold">
            {allusers.length}
          </span>
        </h1>

        <h1>
          Last User Registered is :{" "}
          <span className="text-green-700 font-semibold">
            {allusers[allusers.length - 1]?.userName}
          </span>
        </h1>
        <Button
          onClick={() => naveget("/admin/user")}
          className="text-black"
          color="blue"
          size="sm">
          Show Users
        </Button>
      </div>

      <div className=" bg-[#1F1F31] rounded flex flex-col items-center text-2xl font-normal  p-6 text-white gap-y-10">
        <h1 className="text-blue-500 text-3xl ">Products</h1>
        <h1>
          Number of Products :{" "}
          <span className="text-green-700 font-semibold">{prodct.length}</span>{" "}
        </h1>
        <h1>
          Last Products Added is :{" "}
          <span className="text-green-700 font-semibold">
            {prodct[prodct.length - 1].category}
          </span>{" "}
        </h1>
        <Button
          onClick={() => naveget("/admin/products")}
          color="blue"
          size="sm"
          className="text-black">
          Show Products
        </Button>
      </div>
    </div>
  );
}

export default HomeAdmin;
