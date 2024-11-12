import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './padges/Home'
import NavbarSimple from './compont/NavbarSimple'
import Shop from './padges/Shop'
import Cart from './padges/Cart'
import Footer  from './padges/Footer'
import CheckOut from './padges/CheckOut'
import Login from './padges/Login'
import Profilepicture from './padges/Profilepicture'
import SignUp from "./padges/SignUp";
import EditProfilepicture from './padges/EditProfilepicture'

function Ueser() {
  return (
    <div>
<NavbarSimple />


<Routes>
<Route path='/' element={<Home />}/>
<Route path='/shop' element={<Shop/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/checkOut' element={<CheckOut/>}/>
<Route path="/login" element={<Login />} />
<Route path="/profilepicture" element={<Profilepicture />} />
<Route path="/signup" element={<SignUp />} />
<Route path="/editProfilepicture" element={<EditProfilepicture />} />

</Routes>

<Footer/>




    </div>
  )
}

export default Ueser