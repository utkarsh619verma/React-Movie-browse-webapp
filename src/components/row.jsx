import axios from "axios";
import { useEffect, useState } from "react";
import { Movie } from "./movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// eslint-disable-next-line react/prop-types
export function Row({ id, title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const scrollmoviesleft = () => {
    const slider = document.getElementById("slider" + id); //id here specifies which row the buttons are responding to
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const scrollmoviesright = () => {
    const slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  console.log(movies);
  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
          size={40}
          onClick={scrollmoviesleft}
        />
        <div
          id={"slider" + id}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide  relative  "
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
          size={40}
          onClick={scrollmoviesright}
        />
      </div>
    </div>
  );
}
