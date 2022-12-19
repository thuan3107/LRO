import React, { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";
import { add_doc } from "../../service/TaiLieu/AddDoc.js";
import { FileInput } from "../../components";
import dataCourse from "../../data/course.js";

function DocForm() {
  const { user } = useContext(ProductContext);
  const token = user?.token;
  // const [key, setkey] = useState(null);
  const [data, setData] = useState({
    title: "",
    tag: "",
    dataURL: "",
    nameTag: "",
    desc: "",
    userId: user?.userId,
    creater: user?.username,
  });
  console.table(data);

  const courses = dataCourse.filter(function (item) {
    return item?.key?.toUpperCase() === data?.tag?.toUpperCase();
  });
  // console.log(courses[0]);

  if (courses[0]?.name != "") {
    // console.log(data.nameTag);
    data.nameTag = courses[0]?.name;
  } else {
  }
  useEffect(() => {
    data.nameTag = courses[0]?.name;
  }, [data.tag]);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    // data.nameTag = courses[0]?.name;
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultLogin = await add_doc(token, data);
    console.log(resultLogin);
    if (resultLogin.status == 200) {
      if (resultLogin.data.status === 200) {
        toast(resultLogin.data.message);
        // localStorage.setItem("user", JSON.stringify(resultLogin.data.data));
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        return;
      }
      if (resultLogin.data.status === 201) {
        // setErorrs(resultLogin.data.data);

        toast(resultLogin.data.data);
        return;
      }

      if (resultLogin.data.status === 202) {
        toast(resultLogin.data.message);
        return;
      }
    }
    // console.warn(errors);
  };
  return (
    <div>
      <ToastContainer />

      <div className="my-6 py-6  h-auto ">
        <div>
          <div class="max-w-2xl mx-auto">
            <div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  name="title"
                  onChange={handleChange}
                  value={data.title}
                />
                <label
                  for="floating_email"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nhập Tiêu Đề
                </label>
              </div>

              <div class="grid xl:grid-cols-2 xl:gap-6">
                <div class="relative z-0 mb-1 mt-2 w-full group">
                  <input
                    type="text"
                    class="block uppercase py-3 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    name="tag"
                    onChange={handleChange}
                    value={data.tag}
                  />
                  <label
                    for="floating_first_name"
                    class="absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Mã Môn Học
                  </label>
                </div>
                <div class="relative z-0 mb-1 mt-2 w-full group">
                  <input
                    type="text"
                    name="nameTag"
                    onChange={handleChange}
                    value={data.nameTag}
                    class="block py-3 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    // class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_last_name"
                    class="absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Tên Môn Học
                  </label>
                </div>
              </div>
              {/* <div class="grid xl:grid-cols-2 xl:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <div className="justify-center items-center">
                <div class="max-w-2xl mx-auto">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    for="file_input"
                  >
                    Upload file
                  </label>
                  <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                  />
                </div>
              </div>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </div> */}
              <div class="relative z-0 mb-6 w-full group">
                <div
                  class="mt-2 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
             border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                >
                  <FileInput
                    className={`w-full`}
                    name="dataURL"
                    label="Choose PDF"
                    handleInputState={handleInputState}
                    type="docs"
                    value={data.dataURL}
                  />
                </div>
              </div>
              <div
                className={`${
                  data &&
                  data.title != "" &&
                  data.tag != "" &&
                  data.nameTag != "" &&
                  data?.dataURL?.size == undefined &&
                  data.dataURL != ""
                    ? ""
                    : "hidden"
                } container border-none relative w-full justify-center items-center`}
              >
                <button
                  type="submit"
                  onClick={handleSubmit}
                  class=" justify-center items-center w-[90%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="justify-center items-center">
      <div class="max-w-2xl mx-auto">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          for="file_input"
        >
          Upload file
        </label>
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        />
      </div>
    </div> */}
      </div>
    </div>
  );
}

export default DocForm;
