import React, { useContext, useState } from "react";
import { Input } from "@material-tailwind/react";
import Store from "../context/store";
import { useNavigate } from "react-router-dom";
function Profilepicture() {
  const { logginUser } = useContext(Store);
  const [firstName, setFirstName] = useState(logginUser.firstName);
  const [lastName, setLastName] = useState(logginUser.lastName);
  const [userName, setUserName] = useState(logginUser.userName);
  const [email, setEmail] = useState(logginUser.email);
  const [password, setPassword] = useState(logginUser.password);
  const [gender, setGender] = useState(logginUser.gender);
  const naveget = useNavigate();

  return (
    <div>
      {/* haed profile */}
      <div className="flex flex-col gap-y-5 p-14">
        <h1 className="text-xl font-bold">My Profile</h1>
        <hr className="border-1 border-blue-gray-100 " />
      </div>
      {/* end haed profile */}
      {/* img profile */}
      <div className="flex items-center justify-center w-full">
        <img src={logginUser.image} alt="" />
      </div>
      {/* img profile */}
      {/* dawen profile */}
      <div className="px-24">
        {/* h1 firstName & apowt */}
        <div className="flex flex-col gap-y-4">
          <h1 className="text-green-500 text-xl font-bold  ">{firstName}</h1>
          <div>
            <p className="text-sm text-gray-500">userName : {userName}</p>
            <p className="w-1/3 text-sm">
              My First Name is {firstName} and My Last Name is {lastName} I'm{" "}
              {gender} and I'm member in this site .{" "}
            </p>
          </div>
          <hr className="border-1 border-blue-gray-100 " />
        </div>
        {/* end h1 firstName & apowt */}
        {/* data user */}
        <div className=" p-7 flex flex-col gap-4">
          <div>
            <h1 className="text-lg ">Full Name</h1>
            <div>
              <Input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white pointer-events-none"
              />
              <p className="text-sm text-gray-600">
                Better to have real name to give a good impression to others
                that are dealing with a real personality
              </p>
              <p className="text-sm text-gray-600">
                Note : Enough to just have your First name and last name .
              </p>
            </div>
          </div>
          <div>
            <h1>Email</h1>
            <div>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 pointer-events-none bg-white"
              />
              <p className="text-sm text-gray-600">
                Better to have readable email to give a good impression to
                others that they are dealing with a real personality.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-lg ">Gender</h1>
            <div>
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                className="bg-white w-full rounded-[7px] border pointer-events-none  !border-t-blue-gray-200 border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                <option>male</option>
                <option>female</option>
              </select>
              <p className="text-sm text-gray-600">
                please note that we do not support homosexuality.
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-lg ">Username</h1>
            <div>
              <Input
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                className=" bg-[#E6E6E6] !border-t-blue-gray-200  pointer-events-none "
              />
              <p className="text-sm text-gray-600">
                The userrname is used for the login process and you can never
                change it.
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => naveget("/editProfilepicture")}
              className="rounded-md border border-green-500 py-2 px-4 text-green-500 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-green-500 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button">
              Edit Profile
            </button>
          </div>
        </div>
        {/* data user */}
      </div>
      {/* end dawen profile */}
    </div>
  );
}

export default Profilepicture;
