import React, { useContext, useEffect, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import Store from "../context/store";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function EditProfilepicture() {
  // ________________________________________________________________________
  const { logginUser, setLogginUser } = useContext(Store);
  const [firstName, setFirstName] = useState(logginUser.firstName);
  const [lastName, setLastName] = useState(logginUser.lastName);
  const [email, setEmail] = useState(logginUser.email);
  const [password, setPassword] = useState(logginUser.password);
  const [gender, setGender] = useState(logginUser.gender);
  const [errFirstName, setErrFirstName] = useState(false);
  const [errLastName, setErrLastName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");

  const naveget = useNavigate();
  // ______________________________________________________________
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_ROUTE}/users`)
      .then((res) => setData(res.data));
  }, []);
  // _______________________________________________________________

  const edit = (e) => {
    e.preventDefault();
    const legalEm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (firstName == "" && lastName == "" && email == "" && password == "") {
      setErrFirstName(true);
      setErrLastName(true);
      setErrEmail(true);
      setErrPassword(true);
    } else if (firstName.length < 3) {
      setErrFirstName(true);
    } else if (lastName.length < 3) {
      setErrFirstName(false);
      setErrLastName(true);
    } else if (logginUser.email != email) {
      if (!legalEm.test(email) || data.some((data) => data.email == email)) {
        setErrFirstName(false);
        setErrLastName(false);
        setErrEmail(true);
      }
    } else if (password.length < 6) {
      setErrFirstName(false);
      setErrLastName(false);
      setErrEmail(false);
      setErrPassword(true);
    } else {
      axios({
        method: "patch",
        url: `${import.meta.env.VITE_API_ROUTE}/users/${localStorage.id}`,
        data: {
          firstName,
          lastName,
          email,
          password,
          gender,
          image,
        },
      }).then((res) => {
        setLogginUser(res.data);
      }),
        naveget("/profilepicture");
    }
  };
  // ________________________________________________________________________

  const fuimage = (data) => {
    if (data == "male") {
      setImage(
        "https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg?w=360"
      );
    } else {
      setImage(
        "https://media.istockphoto.com/id/1081125770/vector/face-expression-of-woman-with-blond-hair.jpg?s=612x612&w=0&k=20&c=mN-oV1RNH964Hu8s8Qjie8tOf6Awyf6e-sYUjR_RnOk="
      );
    }
  };
  // ________________________________________________________________________

  return (
    <div className="flex flex-col p-14">
      {/* imge & text Ready To Changed  */}
      <div className="flex flex-col gap-y-3 ">
        <div className="flex items-center">
          <div className="h-20 w-20">
            <img src={logginUser.image} alt="" className="w-full h-full" />
          </div>

          <h1 className="text-xl font-bold">My Profile Ready To Changed ...</h1>
        </div>

        <hr className="border-1 border-blue-gray-100 " />
      </div>
      {/* end imge & text Ready To Changed  */}

      {/* inpot Changed profile  */}
      <form onSubmit={edit} className=" p-7 flex flex-col gap-4">
        {/* First Name */}
        <div>
          <h1 className="text-lg ">First Name</h1>
          <div>
            <Input
              error={errFirstName}
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white "
            />
            <p className="text-sm text-gray-600">
              enough to just writ your first name only .
            </p>
          </div>
        </div>
        {/* end First Name */}
        {/* Last Name */}
        <div>
          <h1>Last Name</h1>
          <div>
            <Input
              error={errLastName}
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900  bg-white"
            />
            <p className="text-sm text-gray-600">
              enough to just write your last name only
            </p>
          </div>
        </div>
        {/* end Last Name */}
        {/* Email  */}
        <div>
          <h1>Email</h1>
          <div>
            <Input
              error={errEmail}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900  bg-white"
            />
            <p className="text-sm text-gray-600">
              once your change your mail your have to re-confirm it form your
              mail box.
            </p>
          </div>
        </div>
        {/* end Email  */}
        {/* Password  */}
        <div>
          <h1>Password</h1>
          <div>
            <Input
              error={errPassword}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900  bg-white"
            />
            <p className="text-sm text-gray-600">
              your new password shall be more than 6 characters
            </p>
          </div>
        </div>
        {/* end Password  */}
        {/* Gender */}
        <div>
          <h1 className="text-lg ">Gender</h1>
          <div>
            <select
              onChange={(e) => {
                setGender(e.target.value), fuimage(e.target.value);
              }}
              value={gender}
              className="bg-white w-full rounded-[7px] border  !border-t-blue-gray-200 border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
              <option>male</option>
              <option>female</option>
            </select>
            <p className="text-sm text-gray-600">
              please note that we do not support homosexuality.
            </p>
          </div>
        </div>
        {/* end Gender */}

        <div>
          <Button type="submit" size="md" className="bg-[#2D1DC6]">
            Edit Profile
          </Button>
        </div>
      </form>
      {/* end inpot Changed profile  */}

      {/* naveget("/Profilepicture") */}
    </div>
  );
}

export default EditProfilepicture;
