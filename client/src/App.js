import "./App.css";
import { useEffect, useState, StrictMode, useContext } from "react";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { ProductContext } from "./contexts/ProductContextProvider.jsx";
import DocsForm from "../src/components/Test/DocForm/index.jsx";
import Docs from "../src/components/Test/Docs/index.jsx";
import { GET_ALL_DOC } from "./service/apiConstant.js";
import {
  Home,
  BaiVietPage,
  BlogsPage,
  TaiLieuPage,
  ThaoLuanPage,
  LoginPage,
  RegisterPage,
  ViewTaiLieuPage,
  CreateTaiLieuPage,
} from "./page/";

function App() {
  const { user } = useContext(ProductContext);

  return (
    <>
      {/* <div className="container">
        <DocsForm />
        <div className="songs_container">
          {songs.map((song) => (
            <Docs song={song} key={song._id} />
          ))}
        </div>
      </div> */}
      {/* <Login /> */}
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {user && user?.userId ? (
              <>
                //* BaiVietPage
                <Route path="/baiviet" element={<BaiVietPage />} />
                //* TaiLieu
                <Route path="/tailieu" element={<TaiLieuPage />} />
                <Route path="/tailieu/create" element={<CreateTaiLieuPage />} />
                <Route path="/tailieu/view/:id" element={<ViewTaiLieuPage />} />
                //*BlogsPage
                <Route path="/blogs" element={<BlogsPage />} />
                //* ThaoLuanPage
                <Route path="/thaoluan" element={<ThaoLuanPage />} />
              </>
            ) : (
              <>{/* <Route path="/register" element={<Register />} /> */}</>
            )}
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </>
  );
}

export default App;
