import "./App.css";
import { useEffect, useState, StrictMode, useContext } from "react";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { ProductContext } from "./contexts/ProductContextProvider.jsx";
import DocsForm from "../src/components/Test/DocForm/index.jsx";
import Docs from "../src/components/Test/Docs/index.jsx";

import {
  Home,
  BaiVietPage,
  BlogsPage,
  TaiLieuPage,
  ThaoLuanPage,
  LoginPage,
  RegisterPage,
} from "./page/";

function App() {
  const { user } = useContext(ProductContext);

  const [songs, setSongs] = useState([]);
  const getAllSongs = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/docs" + "/getdocs"
      );
      setSongs(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.warn(songs);
  useEffect(() => {
    getAllSongs();
  }, []);
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
                <Route path="/baiviet" element={<BaiVietPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/tailieu" element={<TaiLieuPage />} />
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
