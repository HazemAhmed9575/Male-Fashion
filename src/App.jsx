import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Ueser from "./Ueser";
import Admin from "./Admin";
import axios from "axios";
import Store from "./context/store";

function App() {
  const [logged, setLogged] = useState(false);
  const [logginUser, setLogginUser] = useState(null);
  const [prodct, setProdct] = useState([]);
  const [cartUser, setCartUser] = useState([]);
  const [numperCart, setNumperCart] = useState(0);

  useEffect(() => {
    axios({
      method: "get",
      url:`${import.meta.env.VITE_API_ROUTE}/users/${localStorage.id}`,
    }).then((res) => {
      setLogginUser(res.data);
      console.log(res.data);
      
    });
  }, []);
  
  
  

  useEffect(() => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_API_ROUTE}/prodct`,
    }).then((res) => setProdct(res.data));
  }, []);

  return (
    <Store.Provider
      value={{
        prodct,
        setProdct,
        cartUser,
        setCartUser,
        numperCart,
        setNumperCart,
        logged,
        setLogged,
        logginUser,
        setLogginUser,
      }}>
      <div className="w-full">
        <Routes>
          <Route path="/*" element={<Ueser />} />
          <Route
            path="/admin/*"
            element={logginUser?.role == "admin" && <Admin />}
          />
        </Routes>
      </div>
    </Store.Provider>
  );
}

export default App;
