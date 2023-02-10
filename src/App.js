import { Settings } from "./Settings";
import { useState } from "react";
import { Board } from "./Board";

function App() {
  const [gameSettings, setGameSettings] = useState()

  const startGame = settings => {
    setGameSettings(settings);
  };

  return (
    <>
      <h1>Memo Game</h1>
      {gameSettings ?
        <Board
          gameSettings={gameSettings}
        /> :
        <Settings
          startGame={startGame}
        />
      }
    </>
  );
}

export default App;
