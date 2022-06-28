import { useContext } from "react";
import LotrContext from "../../../context/lotr/LotrContext";
import { AnimatePresence, motion } from "framer-motion";
import Spinner from "../sppinner/Spinner";

const QuoteResults = () => {
  const { quote, character, movie, loading } = useContext(LotrContext);

  if (!loading) {
    return (
      <AnimatePresence>
        <motion.div
          className="w-full lg:h-full h-screen flex flex-col  justify-center items-center md:items-center lg:flex-wrap lg:items-center lg:justify-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "keyframes",
            duration: 1,
          }}
        >
          <div className="flex flex-col  items-center  lg:w-2/5  ">
            <p className=" text-center md:text-2xl lg:text-2xl">
              "{quote.dialog}"
            </p>
            <p> by {character[0].name}</p>
            <p className="pt-5">- {movie[0].name} -</p>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  } else {
    return <Spinner />;
  }
};

export default QuoteResults;
