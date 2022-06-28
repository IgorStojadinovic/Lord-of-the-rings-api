import { useState, useContext } from "react";
import { getCharacter } from "../../../context/lotr/LotrActions";
import { AnimatePresence, motion } from "framer-motion";
import LotrContext from "../../../context/lotr/LotrContext";
import LotrAlertContext from "../../../context/alert/LotrAlertContext";
import CharacterResults from "./CharacterResults";
import Alert from "../alert/Alert";
import Navbar from "../../navigation/Navbar";

function Characters() {
  const [text, setText] = useState("");

  const { dispatch, loading, character } = useContext(LotrContext);
  const { setAlert } = useContext(LotrAlertContext);

  const handleChange = (e) => {
    const string = e.target.value.toString();
    setText(string.charAt(0).toUpperCase() + string.slice(1));
  };

  const clear = () => {
    dispatch({ type: "CLEAR", payload: [] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (text === "") {
        setAlert("Please enter something", "error");
      } else {
        dispatch({ type: "SET_LOADING", payload: true });

        const character = await getCharacter(text);

        dispatch({ type: "GET_CHARACTER", payload: character });

        dispatch({ type: "SET_LOADING", payload: false });
        setText("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <AnimatePresence>
        <motion.div
          className=" flex flex-col items-center w-full h-[1200px]  md:h-screen lg:h-[90vh] lg:items-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1,
          }}
        >
          <form
            className="w-full h-full flex-1 flex form-control items-center"
            onSubmit={handleSubmit}
            method="GET"
          >
            <p className="flex items-center  text-center h-[15%] text-lg   lg:hidden">
              Searh for your favorite characters
            </p>

            <div className="form-control w-[70%] flex flex-col items-center lg:w-[50%] ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 2,
                }}
                style={{ height: "50px" }}
              >
                <Alert />
              </motion.div>

              <div className="input-group w-full ">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered w-full "
                  onChange={handleChange}
                  value={text}
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
              {character.length > 0 ? (
                <button
                  className="btn btn-square w-[150px] m-10 "
                  onClick={clear}
                >
                  Clear
                </button>
              ) : (
                <></>
              )}
            </div>
            <div className="flex items-center justify-center">
              {!loading ? <CharacterResults /> : <div></div>}
            </div>
          </form>
        </motion.div>{" "}
      </AnimatePresence>
    </>
  );
}

export default Characters;
