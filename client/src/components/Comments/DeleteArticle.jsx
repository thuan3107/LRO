import React, { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../firebase.js";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";

export default function DeleteArticle({ id, imageUrl, colDB, description }) {
  // const [temp, setTemp] = useState(false);
  const handleDelete = async () => {
    // if (
    //   Swal.fire({
    //     position: "center",
    //     icon: "success",
    //     title: "Xoá Bình Luận Thành Công",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   })
    // ) {

    // }
    try {
      // Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      await deleteDoc(doc(db, colDB, id));
      // const storageRef = ref(storage, id);
      // await deleteObject(storageRef);
      toast("1 Bình luận đã được xoá", { type: "success" });
    } catch (error) {
      // toast("Error deleting article", { type: "error" });
      console.log(error);
    }
  };

  function sw() {
    Swal.fire({
      title: "Bạn muốn xoá bình luận này",
      text: description.substring(0, 50) + "...",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Huỷ",
      confirmButtonText: "Chấp nhận xoá",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete();
      } else {
      }
    });
  }
  return (
    <div onClick={sw} className="cursor-pointer flex p-1 border rounded-md">
      <TiDelete className="text-black text-2xl" />
      Xoá
    </div>
  );
}
