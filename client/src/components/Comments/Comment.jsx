import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { db } from "../../firebase.js";
// import { useAuthState } from 'react-firebase-hooks/auth';
import { v4 as uuidv4 } from "uuid";
// import { auth } from '../../firebase.config';
import Articles from "./Articles";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";
import { NavLink } from "react-router-dom";

export default function Comment({ id, colDB }) {
  // const [{ user, OCIT_HOCPHAN, OCIT, OCIT_ORDER }, dispatch] = useStateValue();
  const { user } = useContext(ProductContext);

  const [comment, setComment] = useState("");
  // console.log(comment);
  if (comment.length > 3000) {
    alert("Bạn viết quá nhiều rồi ");
  }
  const [comments, setComments] = useState([]);
  // console.log(comments);
  // const [currentlyLoggedinUser] = useAuthState(auth);
  // const currentUser = currentlyLoggedinUser.providerData[0];
  // console.log(currentlyLoggedinUser.providerData[0].photoURL);
  const commentRef = doc(db, colDB, id);
  // console.log(commentRef);

  useEffect(() => {
    const docRef = doc(db, colDB, id);
    onSnapshot(docRef, (snapshot) => {
      setComments(snapshot.data().comments);
    });
  }, []);

  const handleChangeComment = (e) => {
    if (e.key === "Enter") {
      updateDoc(commentRef, {
        comments: arrayUnion({
          uid: user.userId,
          userName: user.first_name + " " + user.last_name,
          comment: comment,
          createdAt: new Date(),
          userPhotoURL: user.avatar,
          commentId: uuidv4(),
        }),
      }).then(() => {
        setComment("");
      });
    }
  };

  // delete comment function
  const handleDeleteComment = (comment) => {
    console.log(comment);
    updateDoc(commentRef, {
      comments: arrayRemove(comment),
    })
      .then((e) => {
        console.log(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="m-auto w-[100%] -mt-2">
      <div>
        {comments !== null &&
          comments.map(
            ({
              commentId,
              uid,
              comment,
              userName,
              createdAt,
              userPhotoURL,
            }) => (
              <div key={commentId}>
                <div
                  class={`w-[830px] relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg ${
                    uid === user.userId ? "bg-black/10" : "bg-blue-800/10"
                  }`}
                >
                  <div class="relative flex gap-4">
                    <img
                      src={userPhotoURL}
                      class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                      alt=""
                      loading="lazy"
                    />
                    <div class="flex flex-col w-full">
                      <div class="flex flex-row justify-between">
                        <p class="relative text-xl whitespace-nowrap truncate overflow-hidden hover:text-blue-600">
                          <NavLink to={`/u/${uid}`}>{userName}</NavLink>
                        </p>
                        <p class="text-gray-500 border-2 rounded-full border-black text-xl justify-end">
                          {uid === user.userId && (
                            <span
                              className="md:text-2xl bg-white  text-lg text-pink-400"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                handleDeleteComment({
                                  commentId,
                                  uid,
                                  comment,
                                  userName,
                                  createdAt,
                                  userPhotoURL,
                                })
                              }
                            >
                              <MdOutlineDeleteForever />
                            </span>
                          )}
                        </p>
                      </div>
                      <p class="text-gray-400 text-sm">
                        {" "}
                        {createdAt.toDate().toDateString()}
                      </p>
                    </div>
                  </div>
                  <p class="-mt-4 text-gray-500">
                    {" "}
                    {comment.substring(0, 5000)}
                  </p>
                </div>

                {/* <div className="border p-2 mt-2 row">
                                <div className="col-11">
                                    <span
                                        className={`badge text-black ${
                                            user === currentlyLoggedinUser.uid ? 'bg-success' : 'bg-blue-400'
                                        }`}
                                    >
                                        {userName}
                                    </span>
                                    {comment}
                                </div>
                                <div className="col-1">
                                    {user === currentlyLoggedinUser.uid && (
                                        <i
                                            className="fa fa-times"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() =>
                                                handleDeleteComment({ commentId, user, comment, userName, createdAt })
                                            }
                                        >
                                            X
                                        </i>
                                    )}
                                </div>
                            </div> */}
              </div>
            )
          )}
        {user && user ? (
          <input
            type="text"
            className="form-control mt-4 mb-5 w-full bg-[#dce2f4] text-black"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            placeholder="Add a comment"
            maxlength="3000"
            onKeyUp={(e) => {
              handleChangeComment(e);
            }}
          />
        ) : (
          <>
            <span
              type="text"
              className="form-control mt-4 mb-5 w-full bg-[#283149] text-gray-200 border"
              readonly
            >
              Vui lòng đăng nhập để Comment
            </span>
          </>
        )}
      </div>
    </div>
  );
}
