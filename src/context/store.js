import { createContext } from "react";


const Store= createContext({
    prodct:[],
    setProdct:[],
    setCartUser:[],
    cartUser:[],
    numperCart:0,
    setNumperCart:0,
    logged:false,
    setLogged:false,
    logginUser:null,
    setLogginUser:{}
})


export default Store