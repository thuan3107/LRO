import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/index.js";
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
            {ArrayDocs &&
              ArrayDocs.map((item, index) => {
                return (
                  <>
                    <div key={index} class="w-full my-1 mx-2">
                      <div class="px-5 py-2 bg-white bg-opacity-30 object-contain shadow-lg dark:bg-gray-800 shadow rounded-lg ">
                        <div className="justify-between flex">
                          <div class="flex mb-4  -ml-3">
                            <img
                              class=" md:w-12 md:h-12 w-10 h-10 rounded-full "
                              src={item?.createrPhoto}
                            />

                            <div class="ml-2 mt-0.5 items-start justify-start inline-block">
                              <span class="block font-medium text-base leading-snug text-black dark:text-gray-100">
                                {item?.creater}
                              </span>
                              <span class="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                                {item?.date}
                              </span>
                            </div>
                          </div>

                          <div class="md:block hidden">
                            <div className=" flex">
                              <div className="text-sm p-1 mx-1 border-y-2 border-gray-500  justify-center items-center ">
                                {item?.nameTag}
                              </div>
                              <div className="text-sm uppercase p-1 rounded-lg justify-center items-center bg-green-400">
                                {item?.tag}
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="flex -mt-3 -ml-2 md:hidden ">
                          <span className="uppercase flex text-xs text-white bg-green-700 rounded-lg justify-center items-center px-[5px]">
                            <AiFillTag />
                            {item?.tag}
                          </span>
                          <span className="ml-2 text-xs bg-primary rounded-lg text-white px-2">
                            {" "}
                            {item?.nameTag}
                          </span>
                        </p>
                        <p class="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">
                          {item?.title}
                        </p>

                        <div class="flex justify-between items-center mt-1">
                          <div class="flex justify-center items-center ">
                            <div className="flex justify-start items-center">
                              <button
                                onClick={(e) => handleLike(item?._id)}
                                class={`${
                                  item?.like.length > 1 ? "mr-4" : "mr-1"
                                } flex -ml-2  text-md justify-center items-center  bg-blue-400 px-2 rounded-full text-gray-500 dark:text-gray-400  font-light `}
                              >
                                {item?.like.length}
                                {!item?.like?.includes(photoURL) ? (
                                  <>
                                    <AiOutlineLike className="text-xl " />
                                  </>
                                ) : (
                                  <>
                                    <AiFillLike className="text-red-500 text-xl " />
                                  </>
                                )}
                                <span
                                  className={`${
                                    item?.like.length > 1 ? "ml-2" : ""
                                  } flex px-1 ml-1 `}
                                >
                                  {item?.like &&
                                    item?.like.slice(0, 5).map((i, index) => {
                                      return (
                                        <img
                                          key={index}
                                          // onerror={console.log("lôi xanh")}
                                          src={i ? i : logo}
                                          className={`${
                                            item?.like.length > 1
                                              ? "-ml-[10px]"
                                              : ""
                                          } h-[20px] w-[20px]  rounded-full  z-[${index}]`}
                                        />
                                      );
                                    })}
                                </span>
                              </button>
                            </div>
                            <span class="mx-1 bg-blue-400 px-2 rounded-full text-gray-500 dark:text-gray-400  font-light">
                              {item?.view} Lượt xem
                            </span>
                          </div>

                          <div className="item-end justify-end flex">
                            <div
                              onClick={(e) => handleView(item._id)}
                              class=" bg-blue-400 px-2 rounded-full mx-1 text-gray-500 dark:text-gray-400 font-light"
                            >
                              <Link to={`/tailieu/view/${item?._id}`}>
                                {" "}
                                Xem
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </>
        </div>
        <div class="bg-gray-300">05</div>
      </div>
    </>
  );
}

export default TaiLieuPage;
