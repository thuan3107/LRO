import React, { useState, useEffect } from "react";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useParams } from "react-router-dom";
import { Header } from "../../components/index.js";
import { find_one_doc } from "../../service/TaiLieu/FindOneDoc.js";

function ViewTaiLieuPage() {
  let { id } = useParams();
  const [data, setData] = useState();
  const findOneDoc = async () => {
    try {
      const result = await find_one_doc(id);
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.warn(songs);
  useEffect(() => {
    findOneDoc();
  }, []);
  console.log(id);
  console.log(data);

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <nav
          class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Breadcrumb"
        >
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a
                href="#"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  class="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a
                  href="#"
                  class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  {" "}
                  Tài Liệu
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  {data?.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <div className="flex w-full justify-start items-center  border-t border-b border-green-500 text-green-700 ">
          <img className="h-14 w-14 rounded-full" src={data?.createrPhoto} />
          <div class=" px-4 py-3" role="alert">
            <p class="font-bold">{data?.creater}</p>
            <p class="text-sm">{data?.date}</p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen flex justify-center items-center ">
        <iframe
          className=" w-[99%] h-full rounded-xl
          "
          allowfullscreen=""
          frameborder="0"
          src={data?.dataURL}
          title="Hello"
        ></iframe>
      </div>
    </>
  );
}

export default ViewTaiLieuPage;
