import React from "react";
import NavbarAdmin from "./compont/NavbarAdmin";
import { Route, Routes } from "react-router-dom";
import HomeAdmin from "./padges/admin/HomeAdmin";
import ListDefault from "./padges/admin/ListDefault";
import UsersDashBoard from "./padges/admin/UsersDashBoard";
import ProductsDashBoard from "./padges/admin/ProductsDashBoard";
import AddProducts from "./padges/admin/AddProducts";
import EditProduct from "./padges/admin/EditProduct";
import ViewProduct from "./padges/admin/ViewProduct";
import AddUsers from "./padges/admin/AddUsers";
import EditUsers from "./padges/admin/EditUsers";
import ViewUsers from "./padges/admin/ViewUsers";
function Admin() {
  return (
    <div>
      <NavbarAdmin />
      <div className=" md:flex ">
        <ListDefault />
        <Routes>
          <Route path="/" element={<HomeAdmin />} />
          <Route path="/user" element={<UsersDashBoard />} />
          <Route path="/products" element={<ProductsDashBoard />} />
          <Route path="/addProduct" element={<AddProducts />} />
          <Route path="/editProduct/:prodctId" element={<EditProduct />} />
          <Route path="/viewProduct/:prodctId" element={<ViewProduct />} />
          <Route path="/addUsers" element={<AddUsers />} />
          <Route path="/viewUsers/:userId" element={<ViewUsers />} />
          <Route path="/editUsers/:userId" element={<EditUsers />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
