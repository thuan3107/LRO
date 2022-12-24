import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CardTL, Header } from "../../components/index.js";
import { GET_ALL_DOC } from "../../service/apiConstant.js";
import { like_doc } from "../../service/TaiLieu/LikeDoc.js";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";
import { AiFillTag, AiOutlineLike, AiFillLike } from "react-icons/ai";

import { view_doc } from "../../service/TaiLieu/ViewDoc.js";
import Like from "../../components/TaiLieu/Like.jsx";
import logo from "../../images/LRO_logo.png";
import dataCourse from "../../data/course.js";
function TaiLieuPage() {
  const { user } = useContext(ProductContext);
  const token = user?.token;
  const photoURL = user?.photoURL;
  const [docs, setdocs] = useState([]);
  const [data, setData] = useState([]);
  const [ArrayDocs, setArrayDocs] = useState([]);
  const [like, setLike] = useState({
    docs_id: "",
    photoURL: "",
  });
  const getAllDocs = async () => {
    try {
      const { data } = await axios.get(GET_ALL_DOC);
      setdocs(data.data);
      setData(data.data);
      setArrayDocs(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (id) => {
    like.docs_id = id;
    like.photoURL = photoURL;
    try {
      const result = await like_doc(token, like);
      console.log(result);
      if (result.data.status === 200) {
        getAllDocs();
        return;
      }

      if (result.data.status === 202) {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleView = async (id) => {
    try {
      const result = await view_doc(token, id);
      // console.log(result);
      if (result.data.status === 200) {
        getAllDocs();
        return;
      }

      if (result.data.status === 202) {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDocs();
  }, []);

  const [searchKey, setSearchKey] = useState();
  const arr = dataCourse.filter((item) => {
    return item?.key?.toLocaleLowerCase() === searchKey?.toLocaleLowerCase();
  });
  const arrData = data.filter((item) => {
    return item?.tag?.toLocaleLowerCase() === searchKey?.toLocaleLowerCase();
  });

  // console.log(ArrayDocs);
  // console.log(arrData);
  // console.log(searchKey);
  // console.log(data);
  useEffect(() => {
    if (arrData == "") {
      setArrayDocs(data);
    } else {
      setArrayDocs(arrData);
    }
  }, [searchKey]);
  return (
    <>
      <div>
        <Header />
      </div>
      <div className=" flex mx-2 w-[90%] md:w-[60%]">
        <div class=" md:w-[30%] mx-1">
          <div class="mb-5">
            <label
              for="lName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Mã Học Phần
            </label>
            <input
              type="text"
              name="key"
              id="lName"
              onChange={(e) => setSearchKey(e.target.value)}
              value={searchKey}
              placeholder=" Mã Học Phần"
              class="w-full uppercase rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class=" md:w-[50%]">
          <div class="mb-5">
            <label
              for="lName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Tên Học Phần
            </label>
            <input
              type="text"
              name="lName"
              value={arr[0]?.name}
              id="lName"
              placeholder="Tên Học Phần"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div class="md:grid md:grid-cols-3 md:gap-4 md:mx-2 md:my-4">
        <div class="col-span-2 ">
          <>
            <CardTL data={ArrayDocs} />
          </>
        </div>
        <div class="bg-gray-300">05</div>
      </div>
    </>
  );
}

export default TaiLieuPage;
