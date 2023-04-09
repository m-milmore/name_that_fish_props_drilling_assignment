import { useState } from "react";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import { Images } from "./assets/images";
import "./App.css";
import "./Components/styles/final-score.css";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

function App() {
  const [nextFishToName, setNextFishToName] = useState(initialFishes[0]);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [answersLeft, setAnswersLeft] = useState(() =>
    initialFishes.map((fish) => fish.name)
  );

  const displayFinalScore = answersLeft.length === 0;

  const guessWithFishName = (fishGuess) => {
    setAnswersLeft((prev) =>
      prev.filter((fish) => fish !== nextFishToName.name)
    );
    nextFishToName.name === fishGuess
      ? setCorrectCount((prev) => prev + 1)
      : setIncorrectCount((prev) => prev + 1);
    const currentIndex = initialFishes.findIndex(
      ({ name }) => name === nextFishToName.name
    );
    currentIndex + 1 < initialFishes.length &&
      setNextFishToName(initialFishes[currentIndex + 1]);
  };

  return (
    <div className="App">
      <header>
        <ScoreBoard
          correctCount={correctCount}
          incorrectCount={incorrectCount}
          answersLeft={answersLeft}
        />
        {displayFinalScore ? (
          <FinalScore
            correctCount={correctCount}
            totalCount={initialFishes.length}
          />
        ) : (
          <GameBoard
            nextFishToName={nextFishToName}
            guessWithFishName={guessWithFishName}
          />
        )}
      </header>
    </div>
  );
}

export default App;
