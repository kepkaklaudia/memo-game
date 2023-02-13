import { Settings } from "./Settings";
import { useState } from "react";
import { Board } from "./Board";
import { Background } from "./Background";

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
      <Background />
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