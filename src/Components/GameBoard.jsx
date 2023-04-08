import { useState } from "react";
import "./styles/game-board.css";

export const GameBoard = ({
  setCorrectCount,
  setIncorrectCount,
  setDisplayFinalScore,
  initialFishes,
  setAnswersLeft,
}) => {
  const [nextFishToName, setNextFishToName] = useState(initialFishes[0]);
  const [fishGuess, setFishGuess] = useState("");

  const handleOnChange = ({ target: { value } }) => {
    setFishGuess(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnswersLeft((prev) =>
      prev.filter((fish) => fish !== nextFishToName.name)
    );
    nextFishToName.name === fishGuess
      ? setCorrectCount((prev) => (prev += 1))
      : setIncorrectCount((Prev) => (Prev += 1));
    const currentIndex = initialFishes.findIndex(
      ({ name }) => name === nextFishToName.name
    );
    if (currentIndex + 1 < initialFishes.length)
      setNextFishToName(initialFishes[currentIndex + 1]);
    else {
      setNextFishToName(initialFishes[0]);
      setDisplayFinalScore(true);
    }
    setFishGuess("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={fishGuess}
          onChange={handleOnChange}
        />
        <input type="submit" style={{ cursor: "pointer" }} />
      </form>
    </div>
  );
};
