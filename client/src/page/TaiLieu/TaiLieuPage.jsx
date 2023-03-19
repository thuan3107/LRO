import axios from "axios";
import React, { useEffect, useState, useContext } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { Link } from "react-router-dom";
import {
  CardAuthor,
  CardRight,
  CardTL,
  CardDoc,
  Header,
  Footer,
} from "../../components/index.js";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";

import Banner from "../../components/components/Banner.jsx";

function TaiLieuPage() {
  const { user } = useContext(ProductContext);
  const token = user?.token;
  const photoURL = user?.photoURL;
  const [docs, setdocs] = useState([]);
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      console.log("1");
    }, 500);
  });

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="w-full h-[250px] bg-black">
        <div className="flex justify-center flex-row items-center h-full">
          <Banner />
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center bg-white ">
        <div className="w-full h-auto py-5 px-4  flex justify-center items-center ">
          <CardTL />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default TaiLieuPage;
