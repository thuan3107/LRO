import React from "react";
import { FiEye } from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";
import { FaDownload, FaRegCommentDots } from "react-icons/fa";
function CardDoc() {
  return (
    <>
      <>
        <div class="max-w-[242px] min-h-[333px] flex items-center justify-center bg-gray-100 rounded-md  hover:bg-blue-400 ease-in-out duration-100 ">
          <div class="w-full  bg-gray-200  p-4 rounded-lg    shadow-md shadow-blue-300/30">
            {/* <img
                src="https://picsum.photos/250/250"
                class="w-full rounded shadow"
              /> */}

            <div className="flex justify-start items-end my-1 z-20 ">
              <img
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
                className="w-6 h-6 rounded-full mr-2 "
              />
              <h1 className="text-[15px] text-blue-900  hover:text-blue-400  cursor-pointer">
                {" "}
                Van Thinh Tran
              </h1>
            </div>
            <iframe
              class="w-full  rounded shadow cursor-grabbing overflow-hidden  "
              src="http://www.cit.ctu.edu.vn/decuong/CT112.pdf"
              title="W3Schools Free Online Web Tutorials"
              frameborder="0"
              scrolling="0"
              scroll="no"
            ></iframe>

            <h3 class="text-gray-900 hover:text-blue-500 cursor-pointer font-bold ">
              {" "}
              Top 50 - Global
            </h3>
            <p class="text-gray-800 font-light mt-1 text-xs">
              {" "}
              Your daily update of the most played track from around the
              world...
            </p>
            <p className="text-xs text-blue-300">
              <span>abc dxf </span>
              <span>abc dxf </span>
              <span>abc dxf </span>
            </p>
            <div className="w-full h-[2px] bg-black"></div>
            <div>
              {/* button */}
              <div class="flex justify-between">
                <span className="text-md flex justify-center items-center ">
                  <span>120</span>
                  <FiEye className="text-md mx-1" />
                </span>

                <span className="text-md flex justify-center items-center ">
                  <span className="text-md flex justify-center items-center mx-1">
                    <span>120</span>
                    <BsFillHeartFill className="text-lg mx-1 text-red-600" />
                  </span>
                  <span>
                    {" "}
                    <FaDownload className="text-lg mx-1" />
                  </span>
                  <span>
                    <FaRegCommentDots className="text-lg mx-1" />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default CardDoc;
