import { useContext } from "react";
import LotrContext from "../../../context/lotr/LotrContext";
import {
  getQuotes,
  getCharacterByID,
  getMovie,
} from "../../../context/lotr/LotrActions";
import QuoteResults from "./QuoteResults";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../../navigation/Navbar";

const QuoteSearch = () => {
  const { quotes, dispatch, loading } = useContext(LotrContext);

  const getRadnomQuote = async () => {
    // Start of api call,set Loading to true
    dispatch({ type: "SET_LOADING", payload: true });

    // Get 100 quotes
    const quotes = await getQuotes();
    dispatch({ type: "GET_QUOTES", payload: quotes });

    //Set random number
    const randomNumber = Math.floor(Math.random() * quotes.length);

    // Get Random Quote
    const movieQoute = quotes[randomNumber];
    //Dispatch to reducer / state
    dispatch({ type: "SET_QOUTE", payload: movieQoute });

    // Set Character id and Movie id
    const CharID = movieQoute.character;
    const MovieID = movieQoute.movie;

    // Get Character buy character id
    const character = await getCharacterByID(CharID);
    dispatch({ type: "GET_CHARACTER", payload: character });

    // Get Movie by Movie id
    const movie = await getMovie(MovieID);
    dispatch({ type: "GET_MOVIE", payload: movie });

    // End of api call set loading to false
    dispatch({ type: "SET_LOADING", payload: false });
  };

  return (
    <>
      <Navbar />
      <AnimatePresence>
        <motion.div
          className="w-full h-[90vh] flex flex-col items-center  w-full xl:pt-5 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1,
          }}
        >
          {!loading ? (
            <button className="btn w-[200px] h-[5%] " onClick={getRadnomQuote}>
              {" "}
              Get a quote
            </button>
          ) : (
            <></>
          )}

          {quotes.length > 0 ? <QuoteResults /> : <div></div>}
        </motion.div>{" "}
      </AnimatePresence>
    </>
  );
};

export default QuoteSearch;
