import { useImages } from "./useImages";
import { Settings } from "./Settings";

function App() {
  const images = useImages();

  const startGame = options => {
    console.log(options);
  };

  return (
    <>
      <h1>Memo Game</h1>
      <Settings startGame={startGame} />
    </>
  );
}

export default App;
