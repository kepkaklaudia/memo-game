import axios from "axios";

 const BASE_URL = "https://api.pexels.com/v1/search?query=space";

 function App() {

const response = axios(
  { baseURL: BASE_URL,
    headers: { Authorization: process.env.REACT_APP_API_KEY}
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
