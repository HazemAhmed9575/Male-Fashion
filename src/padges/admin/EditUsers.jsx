import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Input, Typography, Button } from "@material-tailwind/react";

function EditUsers() {
  const naveget = useNavigate();
  const { userId } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState(0);
  const [userCity, setUserCity] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [show, setShow] = useState(false);
  const [errFirstName, setErrFirstName] = useState(false);
  const [errlastName, setErrLastName] = useState(false);
  const [errUserName, setErrUserName] = useState(false);
  const [erremail, setErrEmail] = useState(false);
  const [errpassword, setErrpassword] = useState(false);
  const [errphone, setErrphone] = useState(false);
  const [errUserCity, setErrUserCity] = useState(false);
  const [errgender, setErrGender] = useState(false);
  const [erralready, setErralready] = useState(false);
  const [errRole, setErrRole] = useState(false);
  const [image, setImage] = useState("");
  const [errImage, setErrImage] = useState(false);
  const [data, setData] = useState([]);
  const [city, setCity] = useState([
    "Cairo",
    "Giza",
    "Alexandria",
    "Shubrā al Khaymah",
    "Sinnūris",
    "Al Manşūrah",
    "Ḩalwān",
    "Al Maḩallah al Kubrá",
    "Shibīn al Qanāţir",
    "Al Fayyūm",
    "Akhmīm",
    "Al Marāghah",
    "Ţanţā",
    "Awsīm",
    "Asyūţ",
    "Az Zaqāzīq",
    "Al Ajamī",
  ]);

  const valuo = () => {
    axios
      .get(`${import.meta.env.VITE_API_ROUTE}/users/${userId}`)
      .then(({ data }) => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setUserName(data.userName);
        setpassword(data.password);
        setImage(data.image);
        setEmail(data.email);
        setUserCity(data.city);
        setGender(data.gender);
        setphone(data.phoneNumber);
        setRole(data.role);
      });
  };

  useEffect(() => {
    valuo();
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_ROUTE}/users`)
      .then((res) => setData(res.data));
  }, []);

  const edit = (e) => {
    e.preventDefault();
    const legalEm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      firstName == "" &&
      lastName == "" &&
      email == "" &&
      password == "" &&
      phone == "" &&
      userName == "" &&
      gender == "" &&
      userCity == "Choose the city" &&
      role == "" &&
      image == ""
    ) {
      setErrFirstName(true);
      setErrLastName(true);
      setErrpassword(true);
      setErrUserName(true);
      setErrEmail(true);
      setErrImage(true);
      setErrUserCity(true);
      setErrphone(true);
      setErrGender(true);
      setErrRole(true);
    } else if (firstName.length < 3) {
      setErrFirstName(true);
    } else if (lastName.length < 3) {
      setErrFirstName(false);
      setErrLastName(true);
    } else if (password.length < 3) {
      setErrFirstName(false);
      setErrLastName(false);
      setErrpassword(true);
    } else if (userName.length < 3) {
      setErrLastName(false);
      setErrFirstName(false);
      setErrpassword(false);
      setErrUserName(true);
    } else if (
      !legalEm.test(email) ||
      data.some((data) => data.email == email)
    ) {
      setErrpassword(false);
      setErrUserName(false);
      setErrFirstName(false);
      setErrLastName(false);
      setErrUserName(false);
      setErralready(true);
      setErrEmail(true);
    } else if (!image.startsWith("https://")) {
      setErrUserName(false);
      setErralready(false);
      setErrFirstName(false);
      setErrLastName(false);
      setErrUserName(false);
      setErrEmail(false);
      setErrImage(true);
    } else if (userCity == "Choose the city") {
      setErrUserName(false);
      setErralready(false);
      setErrFirstName(false);
      setErrLastName(false);
      setErrUserName(false);
      setErrEmail(false);
      setErrImage(false);
      setErrUserCity(true);
    } else if (!phone.startsWith(0)) {
      setErrUserName(false);
      setErralready(false);
      setErrFirstName(false);
      setErrLastName(false);
      setErrUserName(false);
      setErrEmail(false);
      setErrImage(false);
      setErrUserCity(false);
      setErrphone(true);
    } else if (gender == "") {
      setErrUserName(false);
      setErralready(false);
      setErrFirstName(false);
      setErrLastName(false);
      setErrUserName(false);
      setErrEmail(false);
      setErrImage(false);
      setErrUserCity(false);
      setErrphone(false);
      setErrGender(true);
    } else if (role == "") {
      setErrUserName(false);
      setErralready(false);
      setErrFirstName(false);
      setErrLastName(false);
      setErrUserName(false);
      setErrEmail(false);
      setErrImage(false);
      setErrUserCity(false);
      setErrphone(false);
      setErrGender(false);
      setRole(true);
    } else {
      const dataPost = {
        firstName,
        lastName,
        userName,
        email,
        password,
        city,
        gender,
        phoneNumber: phone,
        role,
        image,
      };
      axios({
        method: "put",
        url: `${import.meta.env.VITE_API_ROUTE}/users/${userId}`,
        data: dataPost,
      }).then(() => naveget("/admin/user"));
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <form
        onSubmit={edit}
        className=" p-5  w-full md:w-auto border-solid border-2  rounded-lg bg-[#4F5D73] flex flex-col gap-y-4 text-white  ">
        <div className="grid gap-3 grid-cols-1   md:grid-cols-3">
          {/*  name  */}
          <div>
            <Typography variant="small" className="mb-2 font-medium">
              Your First Name
            </Typography>
            <Input
              type="text"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900  bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              error={errFirstName}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          {/* end name*/}
          {/* Last name */}
          <div>
            <Typography variant="small" className="mb-2 font-medium">
              Last Name
            </Typography>
            <Input
              type="Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900   bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              error={errlastName}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {/* end Last name  */}
          {/* password */}
          <div className="relative">
            <Typography variant="small" className="mb-2 font-medium">
              password
            </Typography>
            <Input
              type={show ? "text" : "password"}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900   bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              error={errpassword}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            {show ? (
              <svg
                onClick={() => setShow(false)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 absolute bottom-2 text-black right-1">
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
                className="size-5 text-black absolute bottom-3 right-1">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </div>
          {/* end password  */}
        </div>

        {/* userName */}
        <div>
          <Typography variant="small" className="mb-2 font-medium">
            User Name
          </Typography>
          <Input
            type="Name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900   bg-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            error={errUserName}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        {/*end userName */}
        {/* Email */}
        <div>
          <Typography
            variant="small"
            className={`mb-2 font-medium ${
              erralready ? "text-red-900" : "text-white"
            }`}>
            {erralready ? "Your Email" : "The email already exists"}
          </Typography>
          <Input
            type="email"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900   bg-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            error={erremail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* end Email */}
        {/* Image */}
        <div>
          <Typography variant="small" className="mb-2 font-medium">
            User Image
          </Typography>
          <Input
            type="text"
            placeholder="https://"
            className="  focus:!border-t-gray-900  bg-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            error={errImage}
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <p className="text-orange-500">
            Image Shall Be Like : https://image.png
          </p>
        </div>
        {/* end Image */}

        <div className="grid gap-4 grid-cols-1   md:grid-cols-2">
          {/* city  */}
          <div className="">
            <Typography
              variant="small"
              className={`mb-2 font-medium ${
                errUserCity ? "text-red-900" : "text-white"
              }`}>
              city
            </Typography>

            <select
              value={userCity}
              onChange={(e) => setUserCity(e.target.value)}
              className={`lg:w-full  bg-white  rounded-[7px] border ${
                errUserCity ? "border-red-900" : "border-blue-gray-200"
              }  border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}>
              <option>Choose the city</option>
              {city.map((data, index) => (
                <option key={index}>{data}</option>
              ))}
            </select>
          </div>
          {/* end city */}
          {/* gender */}
          <div className="">
            <Typography
              variant="small"
              className={`mb-2 font-medium ${
                errgender ? "text-red-900" : "text-white"
              }`}>
              gender
            </Typography>

            <select
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              className={` bg-white  rounded-[7px] border ${
                errgender ? "border-red-900" : "border-blue-gray-200"
              }  border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}>
              <option className="hidden"></option>
              <option>male</option>
              <option>female</option>
            </select>
          </div>
          {/* end gender */}
          {/* phone */}
          <div>
            <Typography variant="small" className="mb-2 font-medium">
              Your phone
            </Typography>
            <Input
              type="number"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900   bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              error={errphone}
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          {/* end phone */}
          {/* Role */}
          <div>
            <Typography variant="small" className="mb-2 font-medium">
              Role
            </Typography>

            <select
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              className={` bg-white  rounded-[7px] border ${
                errRole ? "border-red-900" : "border-blue-gray-200"
              }  border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}>
              <option className="hidden"></option>
              <option>admin</option>
              <option>member</option>
            </select>
          </div>

          {/* end Role */}
        </div>

        {/* Button save */}
        <div className="flex items-center justify-center">
          <Button color="green" type="submit">
            Add User
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditUsers;
