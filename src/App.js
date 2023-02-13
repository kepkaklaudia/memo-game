import { Settings } from "./Settings";
import { useState } from "react";
import { Board } from "./Board";

function App() {
  const [gameSettings, setGameSettings] = useState()

  const startGame = settings => {
    setGameSettings(settings);
  };

  const restartGame = () => {
    setGameSettings();
  }

  return (
    <>
      <h1>Memo Game</h1>
      {gameSettings ?
        <Board
          gameSettings={gameSettings}
          restartGame={restartGame}
        /> :
        <Settings
          startGame={startGame}
        />
      }
    </>
  );
}

export default App;
