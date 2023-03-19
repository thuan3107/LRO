import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { createContext } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [category, setCategory] = useState(localStorage.getItem("category"));

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    localStorage.setItem("category", category);
    console.log(category);
  }, [category]);

  return (
    <ProductContext.Provider value={{ setUser, user, setCategory, category }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
