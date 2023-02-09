import { useImages } from "./useImages";
import { Settings } from "./Settings";

function App() {
  const images = useImages();

  return (
    <>
      <h1 className="header"> Memo Game</h1>
      <Settings />
    </>
  );
}

export default App;
