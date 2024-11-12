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

function ViewUsers() {
  // ______________________________________________
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const naveget = useNavigate();
  // ______________________________________________
  const getdata = () => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_API_ROUTE}/users/${userId}`,
    }).then((res) => setUser(res.data));
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="md:w-1/2 ">
        <CardHeader
          shadow={false}
          floated={false}
          className="flex justify-center items-center">
          <Avatar src={user?.image} alt="avatar" size="xxl" />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex flex-col justify-center items-center ">
            <Typography color="blue-gray" className="font-medium">
              {user?.userName + " " + user?.lastName}
            </Typography>

            <Typography variant="small" color="gray" className="font-normal   ">
              {user?.email}.
            </Typography>
            <Typography variant="small" color="gray" className="font-normal   ">
              {user?.city}.
            </Typography>
            <Typography variant="small" color="gray" className="font-normal   ">
              {user?.role}.
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            onClick={() => naveget("/admin/user")}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
            Back
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ViewUsers;
