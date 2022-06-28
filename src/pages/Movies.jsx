import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/navigation/Navbar";
import PosterOne from "../components/assets/images/moviePoster1.jpg";
import PosterTwo from "../components/assets/images/moviePoster2.jpg";
import PosterThree from "../components/assets/images/moviePoster3.jpg";

const Movies = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 1,
        }}
      >
        <div className="  h-[1400px] flex  justify-center  md:h-[2500px] lg:h-[90vh] ">
          <div className="flex w-full flex-col justify-evenly items-center md:w-full lg:flex-row  lg:h-full  lg:items-center">
            <p className="h-[2%] md:text-2xl lg:hidden">Movies</p>
            <figure className=" flex justify-center h-[30%]  w-[70%] lg:flex lg:justify-center lg:h-[80%] lg:w-[30%]">
              <Link to="/fellowshipofthering">
                <img
                  src={PosterOne}
                  alt="movie poster"
                  className="h-full lg:object-contain"
                />
              </Link>
            </figure>

            <figure className=" flex justify-center h-[30%]   w-[70%] lg:flex lg:h-[80%] lg:w-[30%]">
              <Link to="/twotowers">
                <img
                  src={PosterTwo}
                  alt="movie poster"
                  className="h-full lg:object-contain"
                />
              </Link>
            </figure>

            <figure className=" flex justify-center h-[30%] w-[70%] lg:flex lg:h-[80%] lg:w-[30%]">
              <Link to="/returnoftheking">
                <img
                  src={PosterThree}
                  alt="movie poster"
                  className="h-full lg:object-contain"
                />
              </Link>
            </figure>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Movies;
