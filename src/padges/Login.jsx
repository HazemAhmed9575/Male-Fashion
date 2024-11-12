import React, { useContext, useEffect, useState } from "react";
import { Input, Button, Checkbox } from "@material-tailwind/react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import Store from "../context/store";
function Login() {
  // ++++++++++++++++++++++++++++++++++++++++++++++++
  const [errorEmail, steErrorEmail] = useState(false);
  const [errorPassword, steErrorPassword] = useState(false);
  const [email, steEmail] = useState("");
  const [password, stePassword] = useState("");
  const naveget = useNavigate();
  const [data, setDate] = useState("");
  const { setLogged} = useContext(Store);
  const [show, setShow] = useState(false);
  // ++++++++++++++++++++++++++++++++++++++++++++++++
  useEffect(() => {
    axios({
      method: "get",
      url:`${import.meta.env.VITE_API_ROUTE}/users`,
    }).then((res) => {
      setDate(res.data);
    });
  }, []);

  // __________________________________________________
  const login = (e) => {
    e.preventDefault();
    if (email == "") {
      steErrorEmail(true);
    } else if (data.some((data) => data.email == email)) {
      const user = data.find((data) => data.email == email);
      localStorage.setItem("id", user.id);
      if (user.password == password) {
        setLogged(true),
          naveget("/")
      } else {
        steErrorPassword(true);
      }
    }else{steErrorEmail(true);}
  };
  // __________________________________________________
  return (
    <div className=" flex justify-center items-center p-7 bg-gray-400  ">
      <form
        onSubmit={login}
        className="flex flex-col items-center w-auto   ">
     
        {/* Email */}
        <div className=" p-4  flex flex-col gap-y-4 ">
       <h1 className="text-xl font-bold">Email address</h1>
       <div>

          <Input
            error={errorEmail}
            value={email}
            onChange={(e)=>steEmail(e.target.value)}
            placeholder="Your Email"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <p className="text-sm text-gray-600">We'll never share your email with anyone else. </p>
       </div>
        </div>
        {/* end Email */}
        {/* password */}
        <div className=" p-4 w-full flex flex-col gap-y-4 ">
      <h1 className="text-xl font-bold"> Password</h1>
       <div className="relative w-full">
       <Input
           type={show ? "text" : "password"}
            error={errorPassword}
            value={password}
            onChange={(e) => stePassword(e.target.value)}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
          />
            {show ? (
            <svg
              onClick={() => setShow(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 absolute bottom-2 right-1">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setShow(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 absolute bottom-3 right-1">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          )}
       </div>
        </div>
        {/* end password  */}
        {/* Checkbox  */}
        <div className="text-start ">
          <Checkbox label="Remember Me" className="bg-white" />
        </div>
        {/* end Checkbox  */}
        {/* Button Login  */}
        <div className=" p-4 flex gap-x-4 ">
          <Button  className="bg-[#2D1DC6]" type="submit" >
            Login
          </Button>
          <Button   className="bg-[#2D1DC6]  " onClick={()=>naveget(("/signup"))} >
          Create New Account
          </Button>
         
        </div>
        {/* end Button Login  */}
      
      </form>
    </div>
  );
}

export default Login;
