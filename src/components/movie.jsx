/* eslint-disable no-unused-vars */
import { FaHeart, FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export function Movie({ item }) {
  const [like, setLike] = useState(false);
  const { user } = UserAuth();
  const [saved, setsaved] = useState(false);
  const movieid = doc(db, "users", `${user?.email}`);

  const saveshow = async () => {
    if (user?.email) {
      setLike(!like);
      setsaved(true);
      await updateDoc(movieid, {
        savedshows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("please login to save movie");
    }
  };

  return (
    <div className=" w-[160px]  sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
        className="w-full h-full block"
      />
      <div className="absolute top-0 left-0 w-full h-full  hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal h-full flex justify-center items-center  text-xs md:text-sm font-bold  ">
          {item?.title}
        </p>
        <p onClick={saveshow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300 " />
          ) : (
            <FaRegHeart className=" absolute top-4 left-4 text-gray-300 " />
          )}
        </p>
      </div>
    </div>
  );
}
Movie.propTypes = {
  item: PropTypes.object,
};
