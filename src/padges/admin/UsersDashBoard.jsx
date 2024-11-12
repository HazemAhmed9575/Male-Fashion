import React, { useEffect, useState } from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
function UsersDashBoard() {
  const naveget = useNavigate();
  const [allusers, setAllUsers] = useState([]);
  const [make, setMake] = useState(false);
  const TABLE_HEAD = ["Username", "Role", "Operations"];

  const alrtDel = (id, userName) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert ${userName}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${import.meta.env.VITE_API_ROUTE}/users/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            axios.get(`${import.meta.env.VITE_API_ROUTE}/users`).then((res) => {
              setAllUsers(res.data);
            });
          }
        });
      }
    });
  };
  const makeAdmin = (mak, id) => {
    if (mak == "member") {
      axios({
        method: "patch",
        url: `${import.meta.env.VITE_API_ROUTE}/users/${id}`,
        data: { role: "admin" },
      }).then(() => setMake(!make));
    } else {
      axios({
        method: "patch",
        url: `${import.meta.env.VITE_API_ROUTE}/users/${id}`,
        data: { role: "member" },
      }).then(() => setMake(!make));
    }
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_API_ROUTE}/users`,
    }).then((res) => {
      setAllUsers(res.data);
    });
  }, [make]);

  return (
    <div className="w-full p-5">
      <div className="flex font-sans justify-center items-center p-5 text-3xl ">
        <h1>Users</h1>
      </div>
      <div className="p-3">
        <Button onClick={() => naveget("/admin/addUsers")} color="green">
          Add New User
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
                    className="border-b border-blue-gray-100 bg-[#9DA5B1] p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none opacity-70">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-[#9DA5B1]   ">
              {allusers.map(({ userName, role, id }, index) => {
                const isLast = index === allusers.length - 1;
                const classes = isLast
                  ? "p-4 text-white  "
                  : "p-4 border border-blue-gray-50 text-white  ";

                return (
                  <tr key={index}>
                    <td className={`${classes} border border-blue-gray-50  `}>
                      <Typography
                        variant="small"
                        className="font-normal text-xl ">
                        {userName}
                      </Typography>
                    </td>
                    <td className={`${classes} border border-blue-gray-50 `}>
                      <Typography
                        variant="small"
                        className="font-normal text-xl ">
                        {role}
                      </Typography>
                    </td>
                    <td className=" border border-blue-gray-50  ">
                      <div className="h-full flex justify-evenly">
                        <Button
                          onClick={() => naveget(`/admin/viewUsers/${id}`)}
                          size="sm"
                          color="blue">
                          View
                        </Button>
                        <Button
                          onClick={() => naveget(`/admin/editUsers/${id}`)}
                          size="sm"
                          color="amber">
                          Edite
                        </Button>
                        <Button
                          className={`${
                            userName == "HazemAhmed"
                              ? "pointer-events-none"
                              : "pointer-events-auto"
                          }`}
                          onClick={() => alrtDel(id, userName)}
                          size="sm"
                          color="red">
                          Delete
                        </Button>
                        <Button
                          onClick={() => makeAdmin(role, id)}
                          size="sm"
                          color={`${role == "admin" ? "gray" : "green"}`}
                          className={`${
                            userName == "HazemAhmed"
                              ? "pointer-events-none"
                              : "pointer-events-auto"
                          }`}>
                          {role == "admin" ? "Remove Admin" : "Make Admin"}
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

export default UsersDashBoard;
