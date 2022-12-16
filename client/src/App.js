import "./App.css";
import { useEffect, useState, StrictMode } from "react";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import DocsForm from "../src/components/Test/DocForm/index.jsx";
import Docs from "../src/components/Test/Docs/index.jsx";
import Login from "./components/Account/Login.jsx";
import Register from "./components/Account/Register.jsx";
function App() {
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
          {/* <header>
            <Link to="/">Adopt Me!</Link>
          </header> */}

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </>
  );
}

export default App;
