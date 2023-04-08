import { useState } from "react";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import { Images } from "./assets/images";
import "./App.css";
import "./Components/styles/final-score.css";

function App() {
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
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [displayFinalScore, setDisplayFinalScore] = useState(false);
  const [answersLeft, setAnswersLeft] = useState(() =>
    initialFishes.map((fish) => fish.name)
  );

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
            setCorrectCount={setCorrectCount}
            setIncorrectCount={setIncorrectCount}
            setDisplayFinalScore={setDisplayFinalScore}
            initialFishes={initialFishes}
            setAnswersLeft={setAnswersLeft}
          />
        )}
      </header>
    </div>
  );
}

export default App;
