import axios from "axios";
import { useState, useEffect } from "react";
import requests from "./Request";

export function Main() {
  const [movies, setmovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((Response) => {
      setmovies(Response.data.results);
    });
  }, []);
  console.log(movie);
  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else return str;
  }

  return (
    <div className="text-white w-full h-550">
      <div className="w-full h-full ">
        {/* The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error. */}
        <div className="w-full h-550 absolute bg-gradient-to-r from-black"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute text-white w-full top-[20%] p-4 md:p-4 ">
          <h1 className="text-3xl md:text-5xl ">{movie?.title}</h1>
          <div className="my-4  ">
            <button className="capitalize py-2 px-5 ml-1 bg-gray-300 text-black border ">
              play
            </button>
            <button className=" border capitalize py-2 px-5 bg-black text-white border-gray-300 ml-4 ">
              watch later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
}
