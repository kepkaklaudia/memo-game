import axios from "axios";

const getRandomPage = () => Math.floor(Math.random() * 10) + 1;

function App() {

  const buildURL = () => {
    let url = new URL("https://api.pexels.com/v1/search");

    url.search = new URLSearchParams({
      query: "space", //tochange
      orientation: "square",
      size: "small",
      per_page: 2, //tochange
      page: getRandomPage(),
    })
    return url;
  };

  const response = axios(
    {
      url: buildURL(),
      headers: { 
        Authorization: process.env.REACT_APP_API_KEY 
      }
    })
    .then(response => console.log(response.data))
  console.log(response.data)

  return (
    <div>
      <h1 className="header"> Memo Game</h1>
    </div>
  );
}

export default App;
