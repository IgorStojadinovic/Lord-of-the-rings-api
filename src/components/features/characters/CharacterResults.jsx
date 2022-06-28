import { useContext } from "react";
import CharacterItem from "./CharacterItem";
import LotrContext from "../../../context/lotr/LotrContext";
import { motion } from "framer-motion";

const CharacterResults = () => {
  const { character } = useContext(LotrContext);

  return (
    <>
      {" "}
      {character.map((char, key) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1,
          }}
          key={key}
          className="flex justify-center"
        >
          <CharacterItem char={char} />
        </motion.div>
      ))}
    </>
  );
};

export default CharacterResults;
