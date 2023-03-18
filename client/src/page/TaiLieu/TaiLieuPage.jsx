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
} from "../../components/index.js";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";
import {
  CNTT,
  GDDT,
  KNM,
  KNTN,
  KTCN,

  NLN,
  NN,
  YTSK,
} from "../../images/index.js";
import Banner from "../../components/components/Banner.jsx";

function TaiLieuPage() {
  const { user } = useContext(ProductContext);
  const token = user?.token;
  const photoURL = user?.photoURL;
  const [docs, setdocs] = useState([]);
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  const slideImages = [
    {
      url: CNTT,
      caption: "Slide 1",
      category: "CNTT",
    },
    {
      url: GDDT,
      caption: "Slide 2",
      category: "CNTT",
    },
    {
      url: KNTN,
      caption: "Slide 3",
      category: "CNTT",
    },
    {
      url: KNM,
      caption: "Slide 4",
      category: "CNTT",
    },
    {
      url: KTCN,
      caption: "Slide 5",
      category: "CNTT",
    },
    {
      url: NLN,
      caption: "Slide 6",
      category: "CNTT",
    },
    {
      url: NN,
      caption: "Slide 7",
      category: "CNTT",
    },
    {
      url: YTSK,
      caption: "Slide 8",
      category: "CNTT",
    },
  ];
  const randomizedArray = slideImages.sort(() => Math.random() - 0.5);

  console.log(randomizedArray); // [6, 2, 5, 3, 1, 4]
  function renderBanner() {
    return (
      <>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full h-full justify-center items-center">
            <img className="w-full h-full z-1" src={randomizedArray[0].url} />
          </div>
        </div>
      </>
    );
  }

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

      <div className="w-full h-[250px]">
        <div className="flex justify-center flex-row items-center h-full">
          {/* {renderBanner()}
           */}
          <Banner Images={slideImages} />
        </div>
      </div>
      <div
        className="w-full flex justify-center items-center bg-white
      "
      >
        <div className="w-full py-5 px-4  flex justify-center items-center ">
          <CardTL />
        </div>
      </div>
    </>
  );
}

export default TaiLieuPage;
