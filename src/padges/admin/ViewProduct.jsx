import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
function ViewProduct() {
  // ______________________________________________
  const [prodct, setProdct] = useState(null);
  const { prodctId } = useParams();
  const naveget = useNavigate();
  // ______________________________________________
  const getdata = () => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_API_ROUTE}/prodct/${prodctId}`,
    }).then((res) => setProdct(res.data));
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card  className="md:w-1/2 ">
        <CardHeader
          shadow={false}
          floated={false}
          className="flex justify-center items-center">
          <Avatar src={prodct?.image} alt="avatar" size="xxl" />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center ">
            <Typography color="blue-gray" className="font-medium">
              ${prodct?.price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 h-40 overflow-y-auto  ">
            {prodct?.description}.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            onClick={() => naveget("/admin/products")}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none p-0 h-10 ">
            Back
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ViewProduct;
