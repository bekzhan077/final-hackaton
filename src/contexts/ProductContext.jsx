import React, { createContext, useContext } from "react";

const productContexts = createContext();

export function useProductContext() {
  return useContext(productContexts);
}

const ProductContext = ({ children }) => {
  const value = {};
  return (
    <productContexts.Provider value={value}>
      {children}
    </productContexts.Provider>
  );
};

export default ProductContext;
