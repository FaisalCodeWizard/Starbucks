import React from 'react';
import { useContext,createContext } from 'react';

const Appconstant = createContext();

const Product1 = ({children}) => {
  let name1 = ["faisal","aquib","saquib"];
  let name2 = ["raj","rohit","roy"]
  return (
    <>
      <Appconstant.Provider value={{name1,name2}}>{children}</Appconstant.Provider>
    </>
  )
};

const useProductsContext=()=>{
  return useContext(Appconstant);
};

export {Appconstant,Product1,useProductsContext};