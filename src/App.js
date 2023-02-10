import { useImages } from "./useImages";
import { Settings } from "./Settings";

function App() {
  const images = useImages();

  return (
    <>
      <h1>Memo Game</h1>
      <Settings />
    </>
  );
}

export default App;
