import { Link } from "react-router-dom";
import React from "react";
import {
  Drawer,
  Button,

} from "@material-tailwind/react";


function ListDefault() {
  const [open, setOpen] = React.useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);



  return (
<div className="w-72 h-auto">
  <div className="md:hidden">

<React.Fragment  >
      <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer open={open} onClose={closeDrawer} className="">
      <div className=" static top-0 left-0  bg-[#2F4F4F]">
      <div className="text-white text-3xl font-bold py-24 flex flex-col items-center gap-y-44">
        <Link to="/admin/">DashBoard</Link>
        <Link to="/admin/user">Users</Link>
        <Link to="/admin/products">Products</Link>
      </div>
    </div>
      </Drawer>
    </React.Fragment>
  </div>
  <div className=" static top-0 left-0  bg-[#2F4F4F] hidden md:flex">
      <div className="text-white text-3xl font-bold py-24 flex flex-col items-center gap-y-44 p-5">
        <Link to="/admin/">DashBoard</Link>
        <Link to="/admin/user">Users</Link>
        <Link to="/admin/products">Products</Link>
      </div>
    </div>
</div>





  );
}
export default ListDefault;
