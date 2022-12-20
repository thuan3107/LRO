import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/index.js";
import { GET_ALL_DOC } from "../../service/apiConstant.js";

function TaiLieuPage() {
  // const { user } = useContext(ProductContext);

  const [docs, setdocs] = useState([]);
  const getAllDocs = async () => {
    try {
      const { data } = await axios.get(GET_ALL_DOC);
      setdocs(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.warn(songs);
  useEffect(() => {
    getAllDocs();
  }, []);
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
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
                            <span class="mx-1 bg-blue-400 px-2 rounded-full text-gray-500 dark:text-gray-400  font-light">
                              8 like
                            </span>
                            <span class="mx-1 bg-blue-400 px-2 rounded-full text-gray-500 dark:text-gray-400  font-light">
                              Lượt xem
                            </span>
                          </div>
                          <div className="item-end justify-end flex">
                            <div class=" bg-blue-400 px-2 rounded-full mx-1 text-gray-500 dark:text-gray-400 font-light">
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
