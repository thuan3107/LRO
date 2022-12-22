import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/index.js";
import { GET_ALL_DOC } from "../../service/apiConstant.js";
import { like_doc } from "../../service/TaiLieu/LikeDoc.js";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";
import { async } from "@firebase/util";
import { view_doc } from "../../service/TaiLieu/ViewDoc.js";
function TaiLieuPage() {
  const { user } = useContext(ProductContext);
  const token = user?.token;
  const photoURL = user?.photoURL;
  const [docs, setdocs] = useState([]);
  const [like, setLike] = useState({
    docs_id: "",
    photoURL: "",
  });
  const getAllDocs = async () => {
    try {
      const { data } = await axios.get(GET_ALL_DOC);
      setdocs(data.data);
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

  return (
    <>
      <div>
        <Header />
      </div>
      <div></div>
      <div class="md:grid md:grid-cols-3 md:gap-4 md:mx-2 md:my-4">
        <div class="col-span-2 ">
          <>
            {docs &&
              docs.map((item, index) => {
                return (
                  <>
                    <div key={index} class="w-full my-1 mx-2">
                      <div class="px-5 py-2 bg-white dark:bg-gray-800 shadow rounded-lg ">
                        <div className="justify-between flex">
                          <div class="flex mb-4  ">
                            <img
                              class="w-12 h-12 rounded-full "
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

                          <div class="block ">
                            <div className=" flex">
                              <div className="p-1 mx-1 border-y-2 border-gray-500  justify-center items-center ">
                                {item?.nameTag}
                              </div>
                              <div className="uppercase p-1 rounded-lg justify-center items-center bg-green-400">
                                {item?.tag}
                              </div>
                            </div>
                          </div>
                        </div>

                        <p class="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">
                          {item?.title}
                        </p>
                        <div class="flex justify-between items-center mt-1">
                          <div class="flex ">
                            <button
                              onClick={(e) => handleLike(item?._id)}
                              class={`${
                                item?.like.length > 1 ? "mr-4" : "mr-1"
                              } mx-1 bg-blue-400 px-2 rounded-full text-gray-500 dark:text-gray-400  font-light `}
                            >
                              {item?.like.length} Like
                            </button>

                            <div className="flex">
                              {item?.like &&
                                item?.like.map((i, index) => {
                                  return (
                                    <img
                                      src={i}
                                      className={`${
                                        item?.like.length > 1 ? "-ml-2" : ""
                                      } h-6 w-6 rounded-full left-2 z-[${index}]`}
                                    />
                                  );
                                })}
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
