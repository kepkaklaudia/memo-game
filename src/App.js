import { useImages } from "./useImages";
import { Settings } from "./Settings";
import { useState } from "react";

function App() {
  const [gameSettings, setGameSettings] = useState()
  const images = useImages(gameSettings);

  const startGame = settings => {
    setGameSettings(settings);
    console.log(settings)
  };

  return (
    <>
      <h1>Memo Game</h1>
      <Settings startGame={startGame} />
    </>
  );
}

export default App;
