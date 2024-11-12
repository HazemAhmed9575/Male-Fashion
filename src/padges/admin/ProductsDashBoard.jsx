import React, { useContext } from "react";
import { Button, Card, Typography, Avatar } from "@material-tailwind/react";
import Store from "../../context/store";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ProductsDashBoard() {
  const { prodct, setProdct } = useContext(Store);
  const TABLE_HEAD = ["Product", "Price", "Operations"];
  const naveget = useNavigate();
  const alrtDel = (id, image) => {
    Swal.fire({
      imageUrl: image,
      imageHeight: 74,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${import.meta.env.VITE_API_ROUTE}/prodct/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .get(`${import.meta.env.VITE_API_ROUTE}/prodct`)
              .then((res) => {
                setProdct(res.data);
              });
          }
        });
      }
    });
  };

  return (
    <div className="w-full p-5">
      <div className="flex font-sans justify-center items-center p-5 text-3xl ">
        <h1>Products</h1>
      </div>
      <div className="p-3">
        <Button onClick={() => naveget("/admin/addProduct")} color="green">
          Add New Product
        </Button>
      </div>
      <div>
        <Card className="h-full w-full  overflow-auto">
          <table className="w-full min-w-max table-auto text-center text-white">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-[#4F5D73] p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none opacity-70">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-[#4F5D73] ">
              {prodct.map(({ image, price, id }, index) => {
                const isLast = index === prodct.length - 1;
                const classes = isLast
                  ? "p-4 text-white  "
                  : "p-4 border border-blue-gray-50 text-white  ";

                return (
                  <tr key={index}>
                    <td className={`${classes}  `}>
                      <Avatar src={image} alt="avatar" size="xl" />
                    </td>
                    <td className={`${classes} `}>
                      <Typography
                        variant="small"
                        className="font-normal text-xl ">
                        $ {price}
                      </Typography>
                    </td>
                    <td className=" border border-blue-gray-50  ">
                      <div className="h-full flex justify-evenly">
                        <Button
                          onClick={() => naveget(`/admin/viewProduct/${id}`)}
                          size="sm"
                          color="blue">
                          View
                        </Button>
                        <Button
                          onClick={() => naveget(`/admin/editProduct/${id}`)}
                          size="sm"
                          color="amber">
                          Edit
                        </Button>
                        <Button
                          onClick={() => alrtDel(id, image)}
                          size="sm"
                          color="red">
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}

export default ProductsDashBoard;
