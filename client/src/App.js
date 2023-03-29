import "./App.css";
import { useEffect, useState, StrictMode, useContext } from "react";
import { Fragment } from "react";

import React, { Component } from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import LazyLoad from "react-lazyload";
import { ProductContext } from "./contexts/ProductContextProvider.jsx";
import {
  privateRoutes,
  privateRoutes2,
  publicRoutes,
} from "./routes/routes.js";

function App() {
  const { user } = useContext(ProductContext);
  // let location = useLocation();
  // console.log(extractString(user?.avatar));

  return (
    <>
      {/* <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/register" element={<RegisterPage />} />
            <Route path="/search/:q" element={<SearchPage />} />
            <Route path="/baiviet" element={<BaiVietPage />} />
            <Route
              path="/tailieu"
              element={
                <LazyLoad
                  placeholder={"Loading..."}
                  fallback={<div>Loading...</div>}
                >
                  <TaiLieuPage />
                </LazyLoad>
              }
            />
            {user && user?.userId ? (
              <>
                <Route path="/me/drafts/" element={<ContentManagement />} />
                <Route path="/u/:id" element={<ProFile />} />
                <Route path="/u/edit/:id" element={<EditProfile />} />
                <Route path="/u/edit/pass/:id" element={<ChangePassPage />} />

                <Route path="/baiviet/create" element={<CreateBaiVietPage />} />
                <Route
                  path="/baiviet/update/:id"
                  element={<UpdateBaiVietPage />}
                />
                <Route path="/baiviet/view/:id" element={<ViewBaiVietPage />} />

                <Route path="/tailieu/create" element={<CreateTaiLieuPage />} />
                <Route path="/tailieu/view/:id" element={<ViewTaiLieuPage />} />
              </>
            ) : (
              <></>
            )}
          </Routes>
        </BrowserRouter>
      </StrictMode> */}
      {user && user?.userId ? (
        <>
          {user?.form == "LRO" ? (
            <>
              <Router>
                <div className="App">
                  <Routes>
                    {privateRoutes2.map((route, index) => {
                      const Page = route.component;

                      return (
                        <Route
                          key={index}
                          path={route.path}
                          element={
                            <>
                              <Page />
                            </>
                          }
                        />
                      );
                    })}
                  </Routes>
                </div>
              </Router>
            </>
          ) : (
            <>
              <Router>
                <div className="App">
                  <Routes>
                    {privateRoutes.map((route, index) => {
                      const Page = route.component;

                      return (
                        <Route
                          key={index}
                          path={route.path}
                          element={
                            <>
                              <Page />
                            </>
                          }
                        />
                      );
                    })}
                  </Routes>
                </div>
              </Router>
            </>
          )}
        </>
      ) : (
        <>
          <Router>
            <div className="App">
              <Routes>
                {publicRoutes.map((route, index) => {
                  const Page = route.component;

                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <>
                          <Page />
                        </>
                      }
                    />
                  );
                })}
              </Routes>
            </div>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
