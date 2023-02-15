import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { FaDownload, FaRegCommentDots } from "react-icons/fa";
function CardPost() {
  return (
    <div class="w-full min-h-[140px] flex items-center justify-center ">
      <div class="w-[80%] h-full flex items-center justify-center bg-gray-100 rounded-md  hover:bg-blue-400 ease-in-out duration-100 ">
        <div class="w-full h-full bg-gray-200  py-2 px-4 rounded-lg    shadow-md shadow-blue-300/30">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center">
              <img
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
                className="w-8 h-8 rounded-full mr-2 "
              />
              <span className="lg:text-lg font-mono text-blue-500 hover:text-blue-300 cursor-pointer">
                Van Thinh Tran
              </span>
            </div>
            <span className="mx-1 p-1 ">17/2/2020</span>
          </div>
          <div className="block">
            <h1 className="lg:text-lg md:text-md font-bold text-blue-800 hover:text-blue-400 cursor-pointer">
              Xây dựng Multi Container Spring Boot Apps với Docker Compose
            </h1>
            <p>
              <span className="p-1 mx-1 justify-center items-center text-xs rounded-md bg-blue-gray-100">
                Spring Boot with Docker Compose
              </span>
              <span className="p-1 mx-1 justify-center items-center text-xs rounded-md bg-blue-gray-100">
                Spring Boot with Docker Compose
              </span>
              <span className="p-1 mx-1 justify-center items-center text-xs rounded-md bg-blue-gray-100">
                Spring Boot with Docker Compose
              </span>
            </p>
          </div>
          <div className="flex justify-between pt-1">
            <div className="flex ">
              <span className="mx-1 p-1  rounded-sm">120 view</span>
            </div>
            <p className="text-md flex justify-center items-center ">
              <span className="text-lg flex justify-center items-center mx-1">
                <span>120</span>
                <BsFillHeartFill className="text-xl mx-1 text-red-600" />
              </span>
              <span>
                <FaRegCommentDots className="text-xl mx-1" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPost;
