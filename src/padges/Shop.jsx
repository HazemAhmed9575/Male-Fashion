import React, { useContext } from "react";
import Store from "../context/store";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
function Shop() {
  const { prodct, setCartUser, cartUser, setNumperCart } = useContext(Store);

  const addToCart = ({ id, price, title, image }) => {
    if (cartUser.some((data) => data.id == id)) {
      let newData = cartUser.map((data) => {
        if (data.id == id) {
          data.preparation++;
        }
        return data;
      });
      setCartUser(newData);
    } else {
      let add = { id, price, title, image, preparation: 1 };
      cartUser.push(add);
      setNumperCart(cartUser.length);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3  p-10 ">
      {prodct.map((data) => (
        <Card key={data.id} className="">
          <CardHeader shadow={false} floated={false} className="h-96">
            <img
              src={data.image}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center ">
              <Typography color="blue-gray" className="font-medium">
                ${data.price}
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
             
              className="font-normal opacity-75 h-40 overflow-y-auto  ">
              {data.description}.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              onClick={() => addToCart(data)}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Shop;
